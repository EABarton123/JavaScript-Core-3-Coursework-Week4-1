// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 1;
  for (let i = 0; i < int; i++) {
    sum *= numberArray[i];
  }
  return sum;
}

module.exports = factorial;
