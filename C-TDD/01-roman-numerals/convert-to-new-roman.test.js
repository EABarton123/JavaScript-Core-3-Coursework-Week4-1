let convertToNewRoman = require("./convert-to-new-roman");

test("returns correct roman numerals if passed 944 as an argument", function () {
  let input = 944;
  let expected = "CMXLIV";
  let output = convertToNewRoman(input);

  expect(output).toEqual(expected);

  // Arrange
  // Act
  // Assert
});
test("returns correct roman numerals if passed 3724 as an argument", function () {
  let input = 3724;
  let expected = "MMMDCCXXIV";
  let output = convertToNewRoman(input);

  expect(output).toEqual(expected);
});
