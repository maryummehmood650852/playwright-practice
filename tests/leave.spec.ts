import { test, expect } from '@playwright/test';

test('Leave module test', async ({ page }) => {

  // Login ke baad Dashboard par hain

  // Click Leave from left menu
  await page.getByText('Leave', { exact: true }).click();

  // Verify Leave List page is displayed
  await expect(page.getByText('Leave List', { exact: true })).toBeVisible();

});