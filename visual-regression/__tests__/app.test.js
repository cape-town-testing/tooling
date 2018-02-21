const fs = require('fs');
const path = require('path');

const imageCompare = require('./helpers/image-compare');
const server = require('../app/server');
const port = process.env.APP_PORT;

describe('App', () => {
  let page;

  beforeAll(async () => await server.start(port));
  afterAll(async () => await server.stop());

  beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    await page.setRequestInterception(true);
    let counter = 0;
    page.on('request', request => {
      counter++;
      if (counter === 1) {
        request.continue({ url: `file://${path.join(process.cwd(), 'app/dist/index.html')}` });
      } else {
        request.continue({ url: `file://${path.join(process.cwd(), 'app/dist/bundle.js')}` });
      }
    });
  });

  afterEach(async () => await page.close());

  const testCases = [
    { name: 'small screen', viewport: { width: 260, height: 600 }, image: 'app-small.png' },
    { name: 'medium screen', viewport: { width: 320, height: 768 }, image: 'app-medium.png' },
    { name: 'large screen', viewport: { width: 640, height: 768 }, image: 'app-large.png' },
    { name: 'extra large screen', viewport: { width: 800, height: 768 }, image: 'app-x-large.png' }
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { name, viewport, image } = testCases[i];

    it(name, async () => {
      await page.setViewport(viewport);
      await page.goto(`http://localhost:${port}`);

      const screenshot = await page.screenshot({ fullPage: true, omitBackground: false });
      const result = await imageCompare(screenshot, image);
      expect(result).toMatchBaseline();
    });
  }
});
