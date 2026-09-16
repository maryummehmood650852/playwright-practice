import { test, expect } from '@playwright/test';

test('Add New Employee', async ({ page }) => {

  // Login
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Open PIM
  await page.getByText('PIM', { exact: true }).click();

  // Click Add
  await page.getByRole('button', { name: 'Add' }).click();

  // Enter employee details
  await page.getByPlaceholder('First Name').fill('Maryum');
  await page.getByPlaceholder('Last Name').fill('Mehmood');

  // Save
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait for page to save
  await page.waitForTimeout(2000);

  console.log('Employee creation workflow completed');
});