// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
// First Attempt - Sept 21, 2023

// =============
// Problem
// =============

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

//   Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// var countBits = function (n) {
//   // Program Me
// };


// ==============
// Solution 1
// ==============

var countBits = function (n) {
  return n = n.toString(2).split("").filter(element => element == 1).length
};


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
  })
})