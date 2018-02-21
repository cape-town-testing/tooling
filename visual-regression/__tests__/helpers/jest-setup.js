const fse = require('fs-extra');
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
  const browser = await puppeteer.launch({
    // headless: false,
    // devtools: true,
    ignoreHTTPSErrors: true
  });
  global.__BROWSER__ = browser;
  fse.outputFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
