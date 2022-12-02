let removeVowels = require("./remove-vowels");

function removeVowelsFromWords(words) {
  const result = words.map((word) => {
    const noVowels = word.replace(/[aeiou]/gi, "");
    return noVowels;
  });
  return result;
}

module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
