// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
// First Attempt - September 17, 2024

// =============
// Problem
// =============

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// function shortcut (string) {
//   return '';
// }

// ==============
// Solution 1
// ==============

function shortcut(string) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let removedVowelsString = [];
  for (let char of string) {
    if (VOWELS.includes(char)) {
      continue
    } else {
      removedVowelsString.push(char);
    }
  }
  removedVowelsString = removedVowelsString.join("");

  return removedVowelsString;
}

// ==============
// Tests
// ==============

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest("hello", "hll");
    doTest("how are you today?", "hw r y tdy?");
    doTest("complain", "cmpln");
    doTest("never", "nvr");
  });
});
