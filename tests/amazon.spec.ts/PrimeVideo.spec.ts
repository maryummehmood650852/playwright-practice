import { test, expect } from '@playwright/test';

test('Prime Video Navigation Test', async ({ page }) => {

  await page.goto('https://www.amazon.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Prime Video link
  const primeVideo = page.getByRole('link', {
    name: /Prime Video/i
  }).first();

  await expect(primeVideo).toBeVisible({ timeout: 30000 });
  await primeVideo.click();

  await page.waitForLoadState('domcontentloaded');

  // Movies
  const movies = page.getByTestId('pv-nav-home-movies');
  await expect(movies).toBeVisible({ timeout: 30000 });
  await movies.click();

  // TV Shows
  const tvShows = page.getByTestId('pv-nav-home-tv-shows');
  await expect(tvShows).toBeVisible({ timeout: 30000 });
  await tvShows.click();

  // Sports
  const sports = page.getByTestId('pv-nav-home-sports');
  await expect(sports).toBeVisible({ timeout: 30000 });
  await sports.click();

});