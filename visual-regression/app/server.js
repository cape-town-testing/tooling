const express = require('express');
const path = require('path');

const app = express();

const distPath = path.join(__dirname, 'dist');
app.use('/', express.static(distPath));

module.exports = {
  start: async port => {
    this.server = await app.listen(port);
  },
  stop: async () => {
    await this.server.close();
  }
};
