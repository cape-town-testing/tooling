'use strict';
module.exports = {
  disabled: false,
  
  'Open News24 landing page and verify logo text': (browser) => {
    browser.url(browser.launchUrl);

    const landingPage = browser.page.landingPage();
    landingPage.logoHasText('News24 News. Breaking News. First');
    landingPage.clickTheBusinessMenuItem();

    browser.end();
  },
};
