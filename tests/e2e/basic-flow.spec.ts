import { expect, test } from "@playwright/test";

test("visitor can browse shop", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /voir les produits/i })).toBeVisible();
  await page.getByRole("link", { name: /voir les produits/i }).click();
  await expect(page).toHaveURL(/\/shop/);
  await expect(page.getByRole("heading", { name: /produits rovanx/i })).toBeVisible();
});
