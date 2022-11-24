let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let array = ["Irina", "Etza", "Daniel"];
  let expected = ["rn, tz, Dnl"];

  let output = removeVowelsFromWords(array);

  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
