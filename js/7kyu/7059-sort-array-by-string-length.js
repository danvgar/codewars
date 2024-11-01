// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
// First Attempt - Oct 31, 2024

// =============
// Problem
// =============

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(array) {
//   // Return an array containing the same strings,
//   // ordered from shortest to longest
//   return [];
// }


// ==============
// Solution 1
// ==============

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}


// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Example tests", function () {
  it("Test 1", function () {
    Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]), [
      "I",
      "To",
      "Beg",
      "Life",
    ]);
  });
  it("Test 2", function () {
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]), [
      "",
      "Pizza",
      "Brains",
      "Moderately",
    ]);
  });
  it("Test 3", function () {
    Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]), [
      "Short",
      "Longer",
      "Longest",
    ]);
  });
});
