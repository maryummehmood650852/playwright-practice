import { test, expect } from '@playwright/test';
import path from 'path';

test('Playwright Actions Demo', async ({ page }) => {

    // Open our demo webpage
    await page.goto('file://' + path.resolve('practie.html'));


    // 1. FILL
    await page.getByPlaceholder('Enter product').fill('Laptop');


    // 2. PRESS
    await page.getByPlaceholder('Enter product').press('Enter');


    // 3. CLICK
    await page.getByRole('button', { name: 'Search' }).click();


    // Verify search result
    await expect(page.getByText('You searched for: Laptop')).toBeVisible();


    // 4. CHECK
    await page.getByRole('checkbox').check();


    // Verify checkbox is checked
    await expect(page.getByRole('checkbox')).toBeChecked();


    // 5. UNCHECK
    await page.getByRole('checkbox').uncheck();


    // Verify checkbox is unchecked
    await expect(page.getByRole('checkbox')).not.toBeChecked();


    // 6. HOVER
    await page.getByRole('button', {
        name: 'Hover over me'
    }).hover();


    // Verify hover result
    await expect(
        page.getByRole('button', { name: 'Hovered!' })
    ).toBeVisible();


    // 7. FOCUS
    await page.locator('#focusInput').focus();


    // 8. SELECT OPTION
    await page.locator('#product').selectOption('laptop');


    // Verify selected option
    await expect(page.locator('#product')).toHaveValue('laptop');


    // 9. SET INPUT FILES
    await page.locator('#file').setInputFiles({
        name: 'test.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Playwright file upload test')
    });


    // 10. CLICK LOGIN
    await page.getByRole('button', {
        name: 'Login'
    }).click();


    // Final assertion
    await expect(
        page.getByText('Login button clicked!')
    ).toBeVisible();

});