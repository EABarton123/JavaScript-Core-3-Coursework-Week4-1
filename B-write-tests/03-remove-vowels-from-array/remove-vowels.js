function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    if (
      character !== "a" &&
      character !== "o" &&
      character !== "i" &&
      character !== "e" &&
      character !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input: puts word into an array, removes any consonant from array and join array into new word.

  let result = removeVowels('samuel');

  what is the value of result? 'sml'
*/
