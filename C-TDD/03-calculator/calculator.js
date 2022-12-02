function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let stringToArray = numbers.split(" ");
  let stringToNumber;
  let count = 0;

  if (stringToArray.length === 1) {
    const stringToArray = numbers.split(" ");
    return +stringToArray;
  } else {
    const noComma = numbers.replace(/,/g, "");
    let stringToArray = noComma.split(" ");
    let stringToNumber;
    let count = 0;
    stringToArray.forEach((string) => {
      stringToNumber = +string;
      count += stringToNumber;
    });
    return count;
  }
}

module.exports = add;
