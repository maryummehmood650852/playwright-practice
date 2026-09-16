 import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://www.amazon.com/cart/smart-wagon?newItems=7fc9e66d-6819-4afa-b697-bcc7075c0c59,1&ref_=sw_refresh');

  
  await page.getByRole('button' , {name :'Proceed to checkout(1 item)'}).click();
  
  
});
