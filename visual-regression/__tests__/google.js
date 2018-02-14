const fs = require('fs');
const path = require('path');

const imageCompare = require('../image-compare');

describe('Google', () => {
  let page;

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
  });

  afterAll(async () => {
    await page.close();
  });

  it('home page', async () => {
    await page.setViewport({ width: 1024, height: 768 });
    await page.goto('https://www.google.co.za/');

    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toMatch(/google/);

    const screenshot = await page.screenshot({ fullPage: true, omitBackground: false });
    const result = await imageCompare(screenshot, 'google_home.png');
    expect(result).isGolden();
  });
});
