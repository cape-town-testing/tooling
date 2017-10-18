'use strict';
module.exports = {
  '@tags': ['mobileSite'],
  disabled: false,
  
  'Open News24 landing page and verify logo text': (browser) => {
    browser.url(browser.launchUrl);

    const landingPage = browser.page.landingPage();
    landingPage.logoHasText('News24 News. Breaking News. First');
    landingPage.clickTheFirstHotTopic();
    landingPage.mainStoryIsVisible();

    browser.end();
  },
};
