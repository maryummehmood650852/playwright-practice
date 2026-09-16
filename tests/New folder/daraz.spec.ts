
  import { test, expect } from '@playwright/test';

test('Daraz Sign Up', async ({ page }) => {

  // Open Daraz
  await page.goto('https://www.daraz.pk', {
    waitUntil: 'domcontentloaded'
  });

  // Click Sign Up
  await page.getByRole('link', { name: /sign up/i }).click();

  // Wait for signup form
  await page.waitForTimeout(2000);

  // Find phone input
  const phoneInput = page.locator(
    'input[type="text"], input[type="tel"], input[placeholder*="phone" i], input[placeholder*="mobile" i]'
  ).first();

  await expect(phoneInput).toBeVisible();

  // Playwright automatically enters your number
  await phoneInput.fill('03315409183');

  // Find and click Continue / Sign Up
  const continueButton = page.getByRole('button', {
    name: /continue|sign up/i
  }).first();

  await expect(continueButton).toBeVisible();
  await continueButton.click();

});