import { test, expect } from '@playwright/test';

test('Sample 2: Complete Checkout Flow', async ({ page }) => {
  console.log('--- START: Buying a Product ---');
  await page.goto('https://saucedemo.com');

 
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  console.log('--- Cart Page Loaded! Clicking Checkout ---');
  await page.locator('[data-test="checkout"]').click();

  console.log('--- Filling Dummy Customer Details ---');
  await page.getByPlaceholder('First Name').fill('Ayesha');
  await page.getByPlaceholder('Last Name').fill('Khan');
  await page.getByPlaceholder('Zip/Postal Code').fill('44000');
  await page.locator('[data-test="continue"]').click();

  console.log('--- Clicking Finish Order ---');
  await page.locator('[data-test="finish"]').click();

  
  const thankYouHeader = page.locator('[data-test="complete-header"]');
  await expect(thankYouHeader).toHaveText('Thank you for your order!');
  
  console.log('--- TEST PASSED: Checkout Completed ---');
});
