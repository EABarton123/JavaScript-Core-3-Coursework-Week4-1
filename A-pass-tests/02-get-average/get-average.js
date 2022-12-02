// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  filteredNumbers = numbers.filter((number) => typeof number === "number");
  let total = 0;
  const averageNumber = filteredNumbers.forEach((number) => {
    total += number;
  });
  return total / filteredNumbers.length;
}

module.exports = average;
