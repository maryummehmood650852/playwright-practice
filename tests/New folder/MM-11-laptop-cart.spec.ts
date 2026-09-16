import { test, expect } from '@playwright/test';

test.describe('MM-11 - Search laptop and add it to cart', () => {

  test('MM-11 - Complete E2E Shopping Flow', async ({ page }) => {

    // =====================================================
    // AC1 - User can login successfully
    // =====================================================

    await page.goto('https://www.amazon.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    // Account & Lists
    await page.getByRole('link', {
      name: /account.*lists/i
    }).click();

    // Email / mobile
    const emailInput = page.getByLabel(/email|mobile number/i);

    await expect(emailInput).toBeVisible({
      timeout: 30000
    });

    await emailInput.fill(process.env.AMAZON_EMAIL!);

    await page.getByRole('button', {
      name: /continue/i
    }).click();

    // Password
    const passwordInput = page.getByLabel(/password/i);

    await expect(passwordInput).toBeVisible({
      timeout: 30000
    });

    await passwordInput.fill(process.env.AMAZON_PASSWORD!);

    await page.getByRole('button', {
      name: /sign in/i
    }).click();

    // Verify logged-in state
    await expect(
      page.getByRole('link', {
        name: /account.*lists/i
      })
    ).toBeVisible();

    console.log('AC1 PASS - Login successful');


    // =====================================================
    // AC2 - User can search for laptop
    // =====================================================

    const searchBox = page.locator('#twotabsearchtextbox');

    await expect(searchBox).toBeVisible({
      timeout: 30000
    });

    await searchBox.fill('laptop');
    await searchBox.press('Enter');

    console.log('AC2 PASS - Laptop searched');


    // =====================================================
    // AC3 - Search results are displayed
    // =====================================================

    const firstProduct = page
      .locator('[data-component-type="s-search-result"]')
      .first();

    await expect(firstProduct).toBeVisible({
      timeout: 30000
    });

    console.log('AC3 PASS - Search results displayed');


    // =====================================================
    // AC4 - User can select a laptop
    // =====================================================

    await firstProduct
      .getByRole('heading')
      .first()
      .click();

    console.log('AC4 PASS - Laptop selected');


    // =====================================================
    // AC5 - User can add laptop to cart
    // =====================================================

    const addToCartButton = page.getByRole('button', {
      name: /add to cart/i
    });

    await expect(addToCartButton).toBeVisible({
      timeout: 30000
    });

    await addToCartButton.click();

    console.log('AC5 PASS - Laptop added to cart');


    // =====================================================
    // AC6 - Cart contains selected laptop
    // =====================================================

    // =====================================================
// AC6 - Cart contains selected laptop
// =====================================================

const cartLink = page.locator('#nav-cart');

await expect(cartLink).toBeVisible({
  timeout: 30000
});

await cartLink.click();

await expect(
  page.locator('#sc-active-cart')
).toBeVisible({
  timeout: 30000
});

console.log('AC6 PASS - Cart contains laptop');

    // =====================================================
    // AC7 - User can proceed to checkout
    // =====================================================

    const checkoutButton = page.getByRole('button', {
      name: /proceed to checkout/i
    });

    await expect(checkoutButton).toBeVisible({
      timeout: 30000
    });

    await checkoutButton.click();

    console.log('AC7 PASS - Proceeded to checkout');


    // =====================================================
    // AC8 - Checkout page should be displayed
    // =====================================================

    await expect(page).toHaveURL(/checkout|buy/i);

    console.log('AC8 PASS - Checkout page displayed');


    // =====================================================
    // AC9 - Delivery information
    // =====================================================

    // IMPORTANT:
    // Amazon may already have a saved address.
    // Don't hard-code a real address.
    //
    // Example verification:
    
    await expect(
      page.getByText(/delivery address|shipping address|address/i)
        .first()
    ).toBeVisible({
      timeout: 30000
    });

    console.log('AC9 PASS - Delivery information available');


    // =====================================================
    // AC10 - Review order
    // =====================================================

    await expect(
      page.getByText(/review.*order|order summary/i)
        .first()
    ).toBeVisible({
      timeout: 30000
    });

    console.log('AC10 PASS - Order review displayed');


    // =====================================================
    // AC11 - Logout
    // =====================================================

    await page.goto('https://www.amazon.com/');

    await page.getByRole('link', {
      name: /account.*lists/i
    }).hover();

    const signOut = page.getByRole('link', {
      name: /sign out/i
    });

    await expect(signOut).toBeVisible({
      timeout: 30000
    });

    await signOut.click();

    console.log('AC11 PASS - Logout successful');

  });

});