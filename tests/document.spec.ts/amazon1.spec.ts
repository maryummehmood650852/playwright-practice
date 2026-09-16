import { test, expect } from '@playwright/test';

test('Amazon search', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  await page.getByRole('searchbox').fill('laptop');
  await page.getByRole('searchbox').press('Enter');

  await expect(page).toHaveURL(/laptop/);
});
