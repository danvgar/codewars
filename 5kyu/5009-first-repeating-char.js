// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
// First Attempt - Oct 1, 2023


// =============
// Problem
// =============

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// function firstNonRepeatingLetter(s) {
//   // Add your code here
// }

// P: input will be a string. do not need to account for an empty string. do not need to account for a wrong variable. spaces may be considered 
// R: output will be the first character in the string that does not repeat elsewhere in the string. if a string contains only repeating characters, it should return an empty string. The function should be case insensitive, but the result should still use the original case of the character. 
// E: 
// 'a' -> 'a'
// 'stress' -> 't'
// 'moonmen' -> 'e'
// P:
// do not want to alter original input, but also want to optimize memory. 
// case-insensitive: s.toLowerCase()
// loop through string as array (does this take up more memory?)
// compare indexOf() with lastIndexOf(). if equal, return s[i]

// ==============
// Solution 1
// ==============

function firstNonRepeatingLetter(s) {
  console.log(`Input: ${s}`)
  // do not want to alter original input, but also want to optimize memory. 
  // case-insensitive: s.toLowerCase()
  // loop through string as array (does this take up more memory?)
  for (let i = 0; i < s.length; i++) {
    if (s.length === 1) {
      return s[i]
    } else if (s.length === 0 || i === s.length - 1) {
      return ""
    // }
    // }
    // if (s.toLowerCase().indexOf(s[i]) === s.toLowerCase().lastIndexOf(s[i]) && i === s.length - 1) {
    //   console.log(`Output because i = s.lengthh - 1: ${""}`)
    //   return ""
    } else if (s.toLowerCase().indexOf(s[i]) === s.toLowerCase().lastIndexOf(s[i])) {
      console.log(`Output because first equals last: ${s[i]}`)
      return s[i]
    }
  }
}
// compare indexOf() with lastIndexOf(). if equal, return s[i]

// revisit



// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe('Simple Tests', function () {
  it('should handle simple tests', function () {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});