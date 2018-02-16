const express = require('express');
const app = express();
const homeMadeCalculator = require('./homeMadeCalculator');

app.get('/homeMadeCalculator/', function(req, res) {
  const valueOne = req.query.valueOne;
  const valueTwo = req.query.valueTwo;

  const answer = homeMadeCalculator(valueOne, valueTwo);
  res.json({ answer });
});

app.use(function(err, req, res, next) {
  res.status(400).send(err.message);
});

module.exports = {
  start(port) {
    return new Promise(resolve => {
      this.server = app.listen(port, resolve);
    });
  },
  stop() {
    this.server.close();
  },
};
