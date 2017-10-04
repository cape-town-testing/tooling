'use strict';

const actions = {
  logoHasText(text) {
    this.expect.element('@logoText').text.contains(text);
    return this.api;
  },
  clickTheBusinessMenuItem() {
    this.waitForElementVisible('@businessMenuItem');
    this.click('@businessMenuItem');
    return this.api;
  },
};

module.exports = {
  elements: {
    logoText: '#news24HeaderLogo a',
    businessMenuItem: {
      selector: '//*[@id="tablink2"]/a',
      locateStrategy: 'xpath'
    },
  },
  commands: [actions],
};

