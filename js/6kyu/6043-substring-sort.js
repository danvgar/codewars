// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
// First Attempt - Nov 19, 2023


// =============
// Problem
// =============

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// function inArray(array1, array2){
//   //...
// }


// ==============
// PREP
// ==============

// input will be two arrays of strings. no other edge cases need to be tests

// output will be a sorted array of the strings in the first array that are substrings of strings in a2. if no matches, return an empty string

// should sort be case-sensitive? how should we treat numbers, symbols, etc within the strings?


// ==============
// Solution 1
// ==============

function inArray(array1, array2) {
  // array method filter() takes out elements that are do not meet the condition
  // string method includes() returns true if argument is a substring of the string it's called upon
  // array method sort(), in it's vanilla form, just sorts by UTF-16 code units, which if all characters are alphabetical and a single case, will sort alphabetically. 
  // filter and sort array1
  // // filter is based on the condition of whether array1 is a substr of at least one str in array2. (some(), includes())

  return array1.filter(substr => array2.some(str => str.includes(substr))).sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), `Expected: ["arp", "live", "strong"]`)

// ==============
// Tests
// ==============

const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    a1 = ["xyz", "live", "strong"]
    assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"])

    a1 = ["live", "strong", "arp"]
    assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"])

    a1 = ["tarp", "mice", "bull"]
    assert.sameOrderedMembers(inArray(a1, a2), [])
  });
});
