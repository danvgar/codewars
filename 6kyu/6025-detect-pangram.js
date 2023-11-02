// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
// First Attempt - Nov 1, 2023


// =============
// Problem
// =============

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string){
//   //...
// }


// ==============
// PREP
// ==============


// ==============
// Solution 1
// ==============

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  for (let i = 0; i < alphabet.length; i++) {
    if (!string.toLowerCase().includes(alphabet[i])) {
      return false
    }
  }
  return true
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});
