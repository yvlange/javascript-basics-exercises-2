function calculateSummation(randomNumbers) {
  let sum = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    sum += randomNumbers[i];
  }
  return sum;
}

console.log(calculateSummation([1, 2, 3]));
console.log(calculateSummation([4, 5, 6]));
console.log(calculateSummation([7, 8, 9]));
