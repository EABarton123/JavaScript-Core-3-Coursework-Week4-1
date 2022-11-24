// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  numbers = numbers.filter((number) => typeof number === "number");
  console.log(numbers);
}

module.exports = average;
