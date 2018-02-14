const fs = require('fs');
const path = require('path');

const imageCompare = require('../image-compare');

describe('App', () => {
  let page;

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();

    await page.setRequestInterception(true);
    let counter = 0;

    page.on('request', request => {
      counter++;
      if (counter === 1) {
        const indexHtml = fs.readFileSync(path.join(process.cwd(), 'dist/index.html'));
        request.respond({
          status: 200,
          contentType: 'text/html',
          body: indexHtml
        });
      } else {
        request.continue({ url: `file://${path.join(process.cwd(), 'dist/bundle.js')}` });
      }
    });
  });

  afterAll(async () => {
    await page.close();
  });

  it('home page', async () => {
    await page.setViewport({ width: 1024, height: 768 });
    await page.goto('http://localhost');

    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toMatch(/rocking the dom/);

    const screenshot = await page.screenshot({ fullPage: true, omitBackground: false });
    const result = await imageCompare(screenshot, 'app_home.png');
    expect(result).isGolden();
  });
});
