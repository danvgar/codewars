// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// First Attempt - Oct 29, 2023


// =============
// Problem
// =============

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// function alphabetPosition(text) {
//   return text;
// }


// ==============
// PREP
// ==============

// input will be a single string argument
// ouput will be the same string with each letter replaced by its sequential numeric position in the alphabet. "a" = 1, "b" = 2, etc etc. Each letter will be separated by a space. This should ignore all punctuation, spaces, anything that's not a a letter in the english alphabet. don't worry about null or undefined as an input. an empty string should output an empty string. 

// "ab cd" -> "1 2 3 4"
// "AbC.D" -> "1 2 3 4"


// ==============
// Solution 1
// ==============

function alphabetPosition(text) {
  // Option 1 (Regex): use regular expressions
  // Option 2 (Brute Force + Additional memory): Create an alphabet array, remember that position is index + 1, and then loop through array with conditional: if input has text includes a character from alphabet array, push index + 1 to new array. finally, join the array as a single string with spaces between
  const ALPHABET_ARR = "abcdefghijklmnopqrstuvwxyz".split('')
  let positionArr = []
  text = text.toLowerCase().split("")

  for (let i = 0; i < text.length; i++) {
    if (ALPHABET_ARR.includes(text[i])) {
      positionArr.push(ALPHABET_ARR.indexOf(text[i]) + 1)
    }
  }

  positionArr = positionArr.join(" ")

  return positionArr
}

// ==============
// Solution 2
// ==============

// Using less memory and built-in functions instead of for-loops

function alphabetPosition(text) {
  const ALPHABET_ARR = "abcdefghijklmnopqrstuvwxyz".split('')

  return text
    .toLowerCase() // function is not case sensitive
    .split("") // split string into character array
    .filter( char => ALPHABET_ARR.includes(char) ) // filter out anything that is not alphabetical
    .map( char => ALPHABET_ARR.indexOf(char) + 1) // replace each character with its index in ALPHABET_ARR plus 1
    .join(" ") // join array with spaces
}



// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
  });
});
