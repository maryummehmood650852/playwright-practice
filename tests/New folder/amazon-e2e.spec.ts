import { test, expect } from '@playwright/test';

test.describe('Amazon End-to-End Testing', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Amazon open
    await page.goto('https://www.amazon.com/');
  });

  test('Amazon Complete E2E Shopping Flow', async ({ page }) => {

    // =========================
    // 2. LOGIN / SIGN IN
    // =========================

    await page.getByRole('link', { name: /sign in/i }).first().click();

    // Enter Email
    await page.locator('#ap_email').fill(
      process.env.AMAZON_EMAIL!
    );

    await page.getByRole('button', {
      name: /continue/i
    }).click();

    // Enter Password
    await page.locator('#ap_password').fill(
      process.env.AMAZON_PASSWORD!
    );

    // Click Sign In
    await page.getByRole('button', {
      name: /sign in/i
    }).click();

    // OTP agar aaye to manually enter karo
    await page.pause();

    // =========================
    // 3. SEARCH LAPTOP
    // =========================

    const searchBox = page.getByRole('searchbox', {
      name: /search/i
    });

    await searchBox.fill('laptop');
    await searchBox.press('Enter');

    await expect(page).toHaveURL(/laptop/i);

    // =========================
    // 4. OPEN PRODUCT
    // =========================

    const product = page
      .locator('[data-component-type="s-search-result"]')
      .first()
      .getByRole('link')
      .first();

    await product.click();

    // =========================
    // 5. ADD TO CART
    // =========================

    const addToCart = page.getByRole('button', {
      name: /add to cart/i
    });

    await expect(addToCart).toBeVisible();
    await addToCart.click();

    // =========================
    // 6. OPEN CART
    // =========================

    await page.getByRole('link', {
      name: /cart/i
    }).first().click();

    await expect(
      page.getByText(/shopping cart/i).first()
    ).toBeVisible();

    // =========================
    // 7. PROCEED TO CHECKOUT
    // =========================

    const checkoutButton = page.getByRole('button', {
      name: /proceed to checkout/i
    });

    await expect(checkoutButton).toBeVisible();

    await checkoutButton.click();

    // =========================
    // 8. VERIFY CHECKOUT
    // =========================

    await expect(page).toHaveURL(/checkout|buy/i);

    console.log('Amazon E2E Flow Completed Successfully!');
  });

  test.afterEach(async () => {
    console.log('Test completed.');
  });

});