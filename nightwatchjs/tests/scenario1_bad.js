'use strict';
module.exports = {
  disabled: false,
  
  'Open News24 landing page and verify logo text': (browser) => {
    browser.url(browser.launchUrl);
 
    browser.expect.element('#news24HeaderLogo a').text.contains('News24 News. Breaking News. First');
    browser.useXpath(); // every selector now must be xpath
    browser.waitForElementVisible('//a[contains(text(),"SA politics")]');
    browser.click('//a[contains(text(),"SA politics")]');
    browser.useCss(); // we're back to CSS now
    browser.waitForElementVisible('#main_story_container');

    browser.end();
  },
};
