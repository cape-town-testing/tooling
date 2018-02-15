var express = require("express");
var app = express();
var homeMadeCalculator = require("./homeMadeCalculator");

app.get("/homeMadeCalculator/", function(req, res) {
  var valueOne  = parseInt((req.query.valueOne), 10);
  var valueTwo  = parseInt((req.query.valueTwo), 10);
  var answer = homeMadeCalculator.homeMadeCalculator(valueOne, valueTwo);
  res.send(JSON.stringify(answer));

});

app.listen(3000);