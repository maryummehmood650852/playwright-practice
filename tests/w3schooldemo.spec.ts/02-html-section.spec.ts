import { test, expect } from '@playwright/test';

test('W3Schools HTML Quiz and Certificate Checkout Funnel', async ({ page }) => {
  // 1. Direct navigation to the HTML Quiz Entry point
  await page.goto('https://w3schools.com');

  // --- 40-QUESTION HTML QUIZ FUNNEL ---
  // Using getByText matches the direct textual options inside the W3Schools layout

  // Q1: What does HTML stand for?
  await page.getByText('Hyper Text Markup Language').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q2: Who is making the Web standards?
  await page.getByText('The World Wide Web Consortium').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q3: Choose the correct HTML element for the largest heading:
  await page.getByText('<h1>').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q4: What is the correct HTML element for inserting a line break?
  await page.getByText('<br>').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q5: What is the correct HTML for adding a background color?
  await page.getByText('<body style="background-color:yellow;">').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q6: Choose the correct HTML element to define important text
  await page.getByText('<strong>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q7: Choose the correct HTML element to define emphasized text
  await page.getByText('<em>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q8: What is the correct HTML for creating a hyperlink?
  await page.getByText('<a href="http://w3schools.com">W3Schools.com</a>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q9: Which character is used to indicate an end tag?
  await page.getByText('/', { exact: true }).click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q10: How can you open a link in a new tab/browser window?
  await page.getByText('<a href="url" target="_blank">').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q11: Which of these elements are all <table> elements?
  await page.getByText('<table> <tr> <td>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q12: Inline elements are normally displayed without starting a new line.
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q13: How can you make a numbered list?
  await page.getByText('<ol>').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q14: How can you make a bulleted list?
  await page.getByText('<ul>').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q15: What is the correct HTML for making a checkbox?
  await page.getByText('<input type="checkbox">').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q16: What is the correct HTML for making a text input area?
  await page.getByText('<input type="text">').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q17: What is the correct HTML for making a drop-down list?
  await page.getByText('<select>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q18: What is the correct HTML for making a text area?
  await page.getByText('<textarea>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q19: What is the correct HTML for inserting an image?
  await page.getByText('<img src="image.gif" alt="MyImage">').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q20: What is the correct HTML for inserting a background image?
  await page.getByText('<body style="background-image:url(background.gif); ">').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q21: An <iframe> is used to display a web page within a web page.
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q22: HTML comments start with <!-- and end with -->
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q23: Block-level elements always start on a new line.
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q24: Which HTML element defines the title of a document?
  await page.getByText('<title>').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q25: Which attribute specifies an alternate text for an image?
  await page.getByText('alt').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q26: Which doctype is correct for HTML5?
  await page.getByText('<!DOCTYPE html>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q27: Which HTML element is used to display a scalar measurement?
  await page.getByText('<meter>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q28: Which HTML element is used to display the header?
  await page.getByText('<header>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q29: Which HTML element is used to display a footer?
  await page.getByText('<footer>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q30: What is the correct HTML element for playing video files?
  await page.getByText('<video>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q31: What is the correct HTML element for playing audio files?
  await page.getByText('<audio>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q32: In HTML, global attributes are attributes that can be used on any element.
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q33: Graphic defined by SVG is in which format?
  await page.getByText('XML').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q34: What is the correct HTML element for drawing graphics via JavaScript?
  await page.getByText('<canvas>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q35: HTML global attributes can be used on all HTML elements.
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q36: What form attribute is used to specify where to send the form-data?
  await page.getByText('action').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q37: Which HTML element is used to group related elements in a form?
  await page.getByText('<fieldset>').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q38: Input type 'color' defines a color picker.
  await page.getByText('True').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q39: Which HTML attribute is used to specify that an input field must be filled out?
  await page.getByText('required').first().click();
  await page.getByRole('button', { name: 'Next ❯' }).click();

  // Q40: Which character is used to separate the item name and values?
  await page.getByText('Event attributes').click();
  await page.getByRole('button', { name: 'Next ❯' }).click();


  // --- CERTIFICATE & CHECKOUT STEPS ---

  // 2. Properly capturing the pop-up tab promise
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get Certified Today' }).click();
  const page1 = await page1Promise;

  // 3. Complete checkout on the newly opened tab
  await page1.getByRole('link', { name: 'Full Access', exact: true }).click();
  await page1.getByRole('button', { name: 'Add to Cart' }).click();
  await page1.locator('header').filter({ hasText: 'Your cart Subtotal $499.00' }).getByLabel('Check out').click();

  // 4. Verification Check
  await expect(page1).toHaveURL(/.*checkout/);
});
