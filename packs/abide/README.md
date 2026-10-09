# Offset Abide — the HIPAA pack

The framework content for **Offset Abide**: the HIPAA Security Rule and the
Breach Notification Rule, as 72 requirements with a plain explanation of each.

This repository holds content only. The product itself — the screens, the
registers, the reports, the installers — is one shared engine in
`offsetsecurity/grc-suite`, and a fix there reaches all five products at once.

## What is in here

| | |
|---|---|
| `controls.json` | The 72 requirements: citation, title, part, and the standard each specification sits under |
| `guide.json` | For each one: what it is, what to do, what an investigator looks for, which records prove it |
| `themes.json` | The six parts: 164.308, .310, .312, .314, .316 and breach notification |
| `journey.json` | Get ready — six stages, 29 steps, each tagged with the part of the Rule it satisfies |
| `samples.json` | A starting library: 37 healthcare systems and 26 risks |
| `help/` | Eleven pages, including the map of the Rule and what to do on day one of a breach |
| `pack.json` | Which product this is and which features it switches on |
| `source/` | Where the requirements are actually written |

## Changing the content

**Edit `source/items-*.mjs`, not the JSON.** All five fields of a requirement
live together there, so they cannot drift apart. Then:

```bash
node source/build.mjs
```

which rewrites `controls.json`, `guide.json` and `themes.json`, and refuses if
a reference is duplicated, a parent is missing, a part is unknown or any field
is empty.

`journey.json`, `samples.json` and the help pages are written by hand.

## Building the product

Clone this repository into `packs/abide` inside a checkout of `grc-suite`:

```bash
git clone <this repo> grc-suite/packs/abide
```

Then build as any other product:

```bash
PRODUCT=abide pnpm --filter @offset/web build
docker build -f deploy/docker/Dockerfile --build-arg PRODUCT=abide -t offset-abide .
```

The engine's tests read whatever packs are present, so they cover this one as
soon as it is there.

## Scope, and what is deliberately absent

**In:** 45 CFR 164 Subpart C (the Security Rule) and Subpart D (breach
notification).

**Out:** the Privacy Rule. Notice of privacy practices, minimum necessary,
patient access and amendment, accounting of disclosures. It needs screens the
product does not have, and half of it would be worse than none.

**The 2025 proposed Security Rule rewrite** — mandatory encryption and MFA, the
end of "addressable", asset inventories, annual penetration testing — is still
a proposal, now expected around mid 2027. This pack follows the rules in force.

---

Citations and titles come from 45 CFR Parts 160 and 164. The guidance wording
is original to Offset Security. It is not the text of the regulation and it is
not legal advice.

**Offset Security** — Offset Risk. Enable Growth.
