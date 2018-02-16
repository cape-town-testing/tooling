function homeMadeCalculator(valueOne, valueTwo) {
  const x = parseInt(valueOne, 10);
  const y = parseInt(valueTwo, 10);

  if (isNaN(x) || isNaN(y)) {
    throw new Error('there was an error with the input');
  }

  if (x < 0 || y < 0) {
    throw new Error("inputs can't be negative");
  }

  return x + y;
}

module.exports = homeMadeCalculator;
