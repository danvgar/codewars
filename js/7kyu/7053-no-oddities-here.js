// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
// First Attempt - Oct 1, 2024

// =============
// Problem
// =============

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds( values ){
//   // Return all non-odd values
// }

// ==============
// Solution 1
// ==============

function noOdds(values) {
  return values.filter((num) => num % 2 === 0);
}

// ==============
// Tests
// ==============

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(noOdds([0, 1]), [0]);
    assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);
  });
});
