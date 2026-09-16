import { test, expect } from '@playwright/test';

test('Handle browser alert using Playwright', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/alerts.html');

  // Listen for the browser dialog
  page.on('dialog', async dialog => {

    console.log('Dialog message:', dialog.message());

    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Hello');

    await dialog.accept();
  });

  // Trigger the alert
  await page.getByRole('button', {
    name: /simple alert/i
  }).click();
});