'use strict';
const selenium = require('selenium-standalone');

module.exports = {
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure: false,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 300,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 10000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: false,

  // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 10000,

  // Before/After Hooks of test suites
  before: (next) => {
    selenium.install(() =>
      selenium.start(() =>
        next()
      )
    );
  },

  after: (next) => {
    process.exit(0);
    next();
  },

  // This will be run before each test suite is started
  beforeEach: function(browser, done) {
    // getting the session info
    // browser.status(function(result) {
    //   console.log(result.value);
      done();
    // });
  },

  // This will be run after each test suite is finished
  afterEach: function(browser, done) {
    // console.log(browser.currentTest);
    done();
  },

  // To customize output report
  reporter: (results, next) => next(),
};
