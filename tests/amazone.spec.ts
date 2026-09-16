import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.locator('#claim-input-container').click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('maryummehmood900@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('661625Mm@');
  await page.getByRole('button', { name: 'Sign in' }).click();
});