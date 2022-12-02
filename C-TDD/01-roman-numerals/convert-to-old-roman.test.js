let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  let input = 2663;
  let expected = "MMDCLXIII";
  let output = convertToOldRoman(input);

  expect(output).toEqual(expected);

  // Arrange
  // Act
  // Assert
});
