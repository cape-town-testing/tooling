const fse = require('fs-extra');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
  await global.__BROWSER__.close();
  fse.removeSync(DIR);
};
