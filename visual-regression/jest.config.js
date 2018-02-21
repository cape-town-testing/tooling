module.exports = {
  globalSetup: './__tests__/helpers/jest-setup.js',
  globalTeardown: './__tests__/helpers/jest-teardown.js',
  testEnvironment: './__tests__/helpers/jest-puppeteer-environment.js',
  setupTestFrameworkScriptFile: './__tests__/helpers/jest-framework.js',
  testRegex: '/__tests__/.*\\.test\\.js$'
};
