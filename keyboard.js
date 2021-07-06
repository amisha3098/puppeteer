const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:false}) //launch headless browser
  const page = await browser.newPage() //new page/tab
  await page.goto('https://www.rapidtables.com/tools/notepad.html') //web link
  await page.focus('#area') //focus on selector which is the text area field
  await page.keyboard.type('Hello World');
  await page.keyboard.press('Enter');
  await page.keyboard.type('Welcome to Google Puppeteer');
  await page.keyboard.press('Enter');
  await page.keyboard.type('Feel the magic ✨🎁');
  await page.screenshot({ path: 'image.png' });
  await browser.close() //close browser
  console.log ('done')
})()