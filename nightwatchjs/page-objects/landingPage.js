'use strict';

const actions = {
  logoHasText(text) {
    this.expect.element('@logoText').text.contains(text);
    return this.api;
  },
  clickTheFirstHotTopic() {
    this.waitForElementVisible('@firstHotTopicLink');
    this.click('@firstHotTopicLink');
    return this.api;
  },
  mainStoryIsVisible() {
    this.waitForElementVisible('@mainStoryContainer');
    return this.api;
  },
};

module.exports = {
  elements: {
    logoText: '#news24HeaderLogo a',
    firstHotTopicLink: {
      selector: '//a[contains(text(),"SA politics")]',
      locateStrategy: 'xpath'
    },
    mainStoryContainer: '#main_story_container',
  },
  commands: [actions],
};

