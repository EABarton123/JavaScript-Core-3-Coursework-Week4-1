const oldRoman = [
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"],
];
function convertToMultiples(multiplier, number) {
  const dividedNum = number / multiplier;
  const remainingNum = number % multiplier;
  return [Math.floor(dividedNum), remainingNum];
}
function convertToOldRoman(n) {
  let remaining = n;
  let result = "";
  for (let i = 0; i < oldRoman.length; i++) {
    let [multiplier, letter] = oldRoman[i];
    let convertedNumber = convertToMultiples(multiplier, remaining);
    let [dividedNum, remainingNum] = convertedNumber;
    remaining = remainingNum;
    for (let m = 0; m < dividedNum; m++) {
      result += letter;
    }
  }
  return result;
}

module.exports = convertToOldRoman;
