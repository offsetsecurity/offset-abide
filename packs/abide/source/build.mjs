/**
 * Builds controls.json, guide.json and themes.json from the item files.
 *
 *   node source/build.mjs
 *
 * The JSON files are what the product reads, and they are committed. This
 * exists so the five fields of an item stay together while they are written -
 * the alternative was the same 78 references typed into two files by hand,
 * which drifts the first time one of them is edited.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { administrative } from "./items-administrative.mjs";
import { physical, technical } from "./items-physical-technical.mjs";
import { organisational, documentation, breach } from "./items-organisational-breach.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const THEMES = {
  ADM: "164.308 Administrative",
  PHY: "164.310 Physical",
  TEC: "164.312 Technical",
  ORG: "164.314 Organizational",
  DOC: "164.316 Documentation",
  BRE: "164.400-414 Breach notification",
};

const items = [...administrative, ...physical, ...technical, ...organisational, ...documentation, ...breach];

// Checks worth having, because a bad pack fails at seed time on a customer's
// server rather than here.
const seen = new Set();
const refs = new Set(items.map((i) => i.ref));
for (const i of items) {
  if (seen.has(i.ref)) throw new Error(`${i.ref} appears twice`);
  seen.add(i.ref);
  if (!THEMES[i.theme]) throw new Error(`${i.ref} has unknown theme ${i.theme}`);
  if (i.parent && !refs.has(i.parent)) throw new Error(`${i.ref} has parent ${i.parent}, which is not an item`);
  for (const f of ["title", "o", "a", "e", "r"]) {
    if (!String(i[f] ?? "").trim()) throw new Error(`${i.ref} has an empty ${f}`);
  }
  if (!["standard", "required", "addressable"].includes(i.kind)) {
    throw new Error(`${i.ref} has unknown kind ${i.kind}`);
  }
}

const controls = items.map((i) => ({
  ref: i.ref,
  title: i.title,
  theme: i.theme,
  parentRef: i.parent,
}));

// "Required" and "Addressable" lead the advice, because it is the first thing
// anyone reading a HIPAA control wants to know, and the difference is widely
// misunderstood: addressable is not optional.
// Plain text, no Markdown: the explanation panel renders these as text, so
// asterisks would show as asterisks.
const LEAD = {
  required: "Required. ",
  addressable:
    "Addressable - do this, or something else that achieves the same thing, or write down why neither is reasonable for you. ",
  standard: "",
};

const guide = {};
for (const i of items) {
  guide[i.ref] = { o: i.o, a: LEAD[i.kind] + i.a, e: i.e, r: i.r };
}

writeFileSync(join(root, "themes.json"), JSON.stringify(THEMES) + "\n");
writeFileSync(join(root, "controls.json"), JSON.stringify(controls, null, 2) + "\n");
writeFileSync(join(root, "guide.json"), JSON.stringify(guide, null, 2) + "\n");

const counts = items.reduce((a, i) => ({ ...a, [i.kind]: (a[i.kind] ?? 0) + 1 }), {});
console.log(
  `${items.length} items: ${counts.standard} standards, ${counts.required} required, ${counts.addressable} addressable`,
);
console.log(Object.keys(THEMES).map((t) => `${t} ${items.filter((i) => i.theme === t).length}`).join("  "));
