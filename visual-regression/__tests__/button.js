const fs = require('fs');
const path = require('path');
const React = require('react');

const { renderToString } = require('react-dom/server');
const imageCompare = require('../image-compare');

import styled, { ServerStyleSheet } from 'styled-components';
import 'jest-styled-components';

const PrimaryButton = styled.button`
  padding: 20px;
  background-color: #444;
  color: #fff;

  &:hover {
    background-color: #444;
    color: blue;
  }
`;

const generate = (Component, props = {}, children = null) => {
  const sheet = new ServerStyleSheet();
  const component = renderToString(sheet.collectStyles(<Component {...props}>{children}</Component>));
  const styleTags = sheet.getStyleTags();

  const html = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>React App Setup</title>
      <meta name="viewport" content="width=device-width">
      ${styleTags}
    </head>
    <body>
    ${component}
    </body>
    </html>
`;
  return html;
};

describe('Component', () => {
  let page;

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
  });

  afterAll(async () => {
    await page.close();
  });

  it('component', async () => {
    await page.setViewport({ width: 1024, height: 768 });
    const html = generate(PrimaryButton, {}, 'boom');
    await page.setContent(html);

    const screenshot = await page.screenshot({ fullPage: true, omitBackground: false });
    const result = await imageCompare(screenshot, 'button.png');
    expect(result).isGolden();
  });
});
