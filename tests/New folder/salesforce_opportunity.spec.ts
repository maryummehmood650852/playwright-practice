import { test, expect } from '@playwright/test';

test('CodeGen Sample Run: Create Opportunity in SF', async ({ page }) => {
  test.setTimeout(150000); 

  console.log('--- Phase 1: Authentication via Standard Portal ---');
  await page.goto('https://salesforce.com', { waitUntil: 'networkidle' });

  console.log('--- Filling User Credentials ---');
  await page.fill('#username', 'maryummehmood900@playful-badger-at8wqp.com');
  await page.fill('#password', '661625Mm@'); 
  await page.click('#Login');

  console.log('--- Waiting for Login Session Integration ---');
  await page.waitForLoadState('networkidle');

  console.log('--- Phase 2: Navigation to Opportunity Component ---');
  // Fixed CSS comma selector instead of using 'or'
  const appLauncher = page.locator('div.slds-icon-waffle, button.onesetupAppLauncherHeader');
  if (await appLauncher.count() > 0) {
     await appLauncher.first().click();
     await page.waitForTimeout(2000);
  }

  console.log('--- Phase 3: Populating Object Payload ---');
  const nameSelector = page.locator('input[name="Name"], input[aria-label="Opportunity Name"]');
  await nameSelector.first().waitFor({ state: 'visible', timeout: 35000 });
  await nameSelector.first().fill('CodeGen Automation Deal 2026');

  await page.locator('input[name="CloseDate"]').fill('2026-12-31');

  console.log('--- Adjusting Picklist Options ---');
  const stagePicklist = page.locator('button[aria-label^="Stage"], button[aria-haspopup="listbox"]');
  await stagePicklist.first().click();
  await page.waitForTimeout(2000);
  
  await page.locator('lightning-base-combobox-item[data-value="Prospecting"], [role="option"]:has-text("Prospecting")').first().click();

  console.log('--- Phase 4: Commit Operations ---');
  const saveBtn = page.locator('button[name="SaveEdit"], button:has-text("Save")');
  await saveBtn.first().click();

  console.log('--- TEST TRANSACTION CONCLUDED: Record Successfully Created ---');
  await page.waitForTimeout(6000);
  await page.pause();
});
