const newRoman = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];
function convertToMultiples(multiplier, number) {
  const dividedNum = number / multiplier;
  const remainingNum = number % multiplier;
  return [Math.floor(dividedNum), remainingNum];
}
function convertToNewRoman(n) {
  let remaining = n;
  let result = "";
  for (let i = 0; i < newRoman.length; i++) {
    let [multiplier, letter] = newRoman[i];
    let convertedNumber = convertToMultiples(multiplier, remaining);
    let [dividedNum, remainingNum] = convertedNumber;
    remaining = remainingNum;
    for (let m = 0; m < dividedNum; m++) {
      result += letter;
    }
  }
  return result;
}

module.exports = convertToNewRoman;
