const expect = require('chai').expect;
const homeMadeCalculator = require('../app/homeMadeCalculator');

describe('Testing homeMadeCalculator', function() {
  it('invalid scenario', function() {
    const fn = () => homeMadeCalculator(NaN, NaN);
    expect(fn).to.throw('there was an error with the input');
  });

  it('negative scenario', function() {
    const fn = () => homeMadeCalculator(-10, 20);
    expect(fn).to.throw("inputs can't be negative");
  });

  it('testing the addition method', function() {
    const finalAnswer = homeMadeCalculator(10, 20);
    expect(finalAnswer).to.equal(30);
  });
});
