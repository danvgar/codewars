// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// First Attempt - Nov 7, 2023


// =============
// Problem
// =============

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number(this kata)
// Find the unique string
// Find The Unique

// function findUniq(arr) {
//   // do magic
// }


// ==============
// PREP
// ==============

// input will be an array of numbers, with a minimum array length of 3 elements. all elements will be the same number except for one. the array may be incredibly long so performance is important. are there any edge cases I need to be concerned about? any numbers that appear as strings? empty array? null values?
// output will be the element that only appears once. 

// ==============
// Solution 1
// ==============

function findUniq(arr) {
  // use filter() method to compare first index of element with last index of element 
  return arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element)).at(0)
}

console.log(findUniq([1, 0, 0]), `Expected: 1`)
console.log(findUniq([1, 1, 0]), `Expected: 0`)
console.log(findUniq([1, 0, 1]), `Expected: 0`)


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
    assert.strictEqual(findUniq([0, 1, 0]), 1);
    assert.strictEqual(findUniq([0, 0, 1]), 1);
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
  });
});
