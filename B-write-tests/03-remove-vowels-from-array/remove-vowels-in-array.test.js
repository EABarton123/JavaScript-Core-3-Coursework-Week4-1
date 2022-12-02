let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let array = ["irina", "etza", "daniel"];
  let expected = ["rn", "tz", "dnl"];

  let outPut = removeVowelsFromWords(array);

  expect(outPut).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
