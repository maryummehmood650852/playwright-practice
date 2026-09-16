import { test, expect } from '@playwright/test';

test('Sample 1: E-commerce Add to Cart Check', async ({ page }) => {
  console.log('--- START: Loading SauceDemo Shop ---');
  await page.goto('https://saucedemo.com');

  
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  console.log('--- Login Success! Adding Backpack to Cart ---');
 
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  console.log('--- Verifying Visual Output Badge ---');
  
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  await expect(cartBadge).toHaveText('1');

  console.log('--- TEST PASSED: Item Added Successfully ---');
});
