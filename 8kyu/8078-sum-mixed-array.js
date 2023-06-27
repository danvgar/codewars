// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// First Attempt - June 26, 2023


// =============
// Problem
// =============

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x){

// }


// ==============
// Solution 1
// ==============

function sumMix(x) {
  return x.reduce((acc, c) => Number(acc) + Number(c), 0)
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);
  })
});