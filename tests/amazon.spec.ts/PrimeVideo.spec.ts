import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Prime Video', exact: true }).click();
  await page.getByTestId('pv-nav-static-nav').getByTestId('pv-nav-home-movies').click();
  await page.getByTestId('pv-nav-static-nav').getByTestId('pv-nav-home-tv-shows').click();
  await page.getByTestId('pv-nav-static-nav').getByTestId('pv-nav-home-sports').click();
});