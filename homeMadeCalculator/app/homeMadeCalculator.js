function homeMadeCalculator(valueOne, valueTwo) {
  let answer = 0; 
  let x = parseInt(valueOne, 10)
  let y = parseInt(valueTwo, 10)

  if (x > 0 && y > 0) {
    answer = x + y;
  }
  else {
    answer = 'there was an error with the input';
  } 
  return answer;
}

module.exports = {
  homeMadeCalculator
};
