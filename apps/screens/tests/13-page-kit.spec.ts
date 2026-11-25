import { test, expect } from "@playwright/test";
import { signIn, open, watchErrors } from "./support.js";

/**
 * The shared page look: the summary band whose keys filter the list, and the
 * Dashboard's hero. Same shapes as in every Offset product.
 */
test.beforeEach(async ({ page }) => { await signIn(page); });

test("Controls: the summary band's keys filter the register", async ({ page }) => {
  const errors = watchErrors(page);
  await open(page, "controls");
  const keys = page.locator(".sum-keys button");
  // Wait for the controls to arrive: counting at once found none on a busy machine (go-live, 15 Nov 2026).
  await expect.poll(() => keys.count(), { timeout: 10_000 }).toBeGreaterThanOrEqual(3);
  await expect(page.locator("tbody tr").first()).toBeVisible();
  const all = await page.locator("tbody tr").count();
  await keys.first().click();
  await expect(keys.first()).toHaveAttribute("aria-pressed", "true");
  expect(await page.locator("tbody tr").count()).toBeLessThanOrEqual(all);
  await keys.first().click();
  await expect(keys.first()).toHaveAttribute("aria-pressed", "false");
  expect(errors).toEqual([]);
});

test("Evidence: the age keys filter the list", async ({ page }) => {
  const csrf = (await page.context().cookies()).find((c) => c.name === "offset_csrf")!.value;
  const today = new Date().toISOString().slice(0, 10);
  expect((await page.request.post("/api/v1/evidence", { headers: { "x-csrf-token": csrf }, data: { name: "Page kit fresh evidence", collectedDate: today } })).status()).toBe(201);
  await open(page, "evidence");
  const key = page.locator(".sum-keys button", { hasText: "Fresh" });
  await key.click();
  await expect(key).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("tbody tr", { hasText: "Page kit fresh evidence" })).toBeVisible();
});

test("Dashboard: the hero says where you stand, Up next leads to the plan, and each number leads to its screen", async ({ page }) => {
  await open(page, "dashboard");
  await expect(page.locator(".hero-title")).toBeVisible();
  const cards = page.locator(".kpi");
  expect(await cards.count()).toBeGreaterThanOrEqual(3);
  for (let i = 0; i < await cards.count(); i++) {
    expect(await cards.nth(i).getAttribute("href")).toMatch(/^#\/[a-z]+$/);
  }
  // A card opens its own step on Plan, not whatever the plan suggests.
  const upCards = page.locator(".upnext-card");
  if ((await upCards.count()) >= 2) {
    const title = (await upCards.nth(1).locator("b").innerText()).trim();
    await upCards.nth(1).click();
    await expect(page).toHaveURL(/#\/getready/);
    await expect(page.locator(".next-step").first()).toContainText(title);
  }
});

test("Auditor view: a HIPAA walk-through in HIPAA words, with no ISO or SOC words", async ({ page }) => {
  const errors = watchErrors(page);
  await open(page, "auditor");
  await expect(page.locator(".avc-head h2")).toContainText("HIPAA compliance review");
  for (const group of ["Scope and risk analysis", "Safeguards and evidence", "How it is run"]) {
    await expect(page.locator(".avc-group", { hasText: group })).toBeVisible();
  }
  expect(await page.locator(".avc-row").count()).toBeGreaterThanOrEqual(11);
  const text = await page.locator(".avc").innerText();
  expect(text).not.toMatch(/\bSOC\b|\bCPA\b|criteria matrix|fieldwork|Trust Services|Annex|ISMS|Clause|certification|nonconformit|management system/i);
  // A row opens, and its button goes to the screen behind it.
  await page.locator('[data-step="soa"] .avc-rh').click();
  await page.locator('[data-step="soa"] .avc-open').click();
  await expect(page).toHaveURL(/#\/soa/);
  // The walk-through bar: a way back, the step, and Next.
  const bar = page.locator(".walk");
  await expect(bar).toContainText("Back to the Auditor view");
  await expect(bar).toContainText("Required and addressable decisions");
  await bar.getByRole("button", { name: /Next step/ }).click();
  await expect(bar).not.toContainText("Required and addressable decisions");
  await bar.getByRole("link", { name: /Back to the Auditor view/ }).click();
  await expect(page).toHaveURL(/#\/auditor/);
  await expect(page.locator(".walk")).toHaveCount(0);
  expect(errors).toEqual([]);
});
