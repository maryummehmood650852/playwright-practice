import { test, expect } from '@playwright/test';

test('Open W3Schools Homepage', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');

  await expect(page).toHaveTitle(/W3Schools/i);
});