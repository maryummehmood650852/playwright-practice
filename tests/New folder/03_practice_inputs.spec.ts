import { test, expect } from '@playwright/test';

test('Sample 3: Text Input Practice Form', async ({ page }) => {
  console.log('--- START: Loading LambdaTest Form Practice ---');
  // Yeh ek permanent active developer testing site hai
  await page.goto('https://lambdatest.com');

  console.log('--- Typing Message in Input Box ---');
  const inputMessage = 'Hello Client, Playwright is Working!';
  // Textbox dhoond kar text fill karna
  await page.locator('input#user-message').fill(inputMessage);

  console.log('--- Clicking Get Checked Value Button ---');
  await page.locator('button#showInput').click();

  console.log('--- Verifying Visual Output Text ---');
  // Assertion: Check karna ki niche wahi text display hua ya nahi
  const outputDisplay = page.locator('p#message');
  await expect(outputDisplay).toHaveText(inputMessage);

  console.log('--- TEST PASSED: Form Input Verified ---');
});
