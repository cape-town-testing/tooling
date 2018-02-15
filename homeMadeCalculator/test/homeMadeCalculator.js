var expect = require("chai").expect;
var homeMadeCalculator = require("../app/homeMadeCalculator")
var { homeMadeCalculator } = require("../app/homeMadeCalculator");

describe("Testing homeMadeCalculator", function() {
  it("testing the addition method", function() {
    const finalAnswer = homeMadeCalculator(10,20)
    expect(finalAnswer).to.equal(30)
   });
  it("negative scenario", function() {
    const finalAnswer = homeMadeCalculator(-10,20)
    expect(finalAnswer).to.equal('there was an error with the input')
  });
});
