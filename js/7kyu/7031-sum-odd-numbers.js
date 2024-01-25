// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
// First Attempt - July 23, 2023


// =============
// Problem
// =============

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
// 	// TODO
// }

// P: input will be an integer n representing the row of the above triangle, which consists of consecutive odd numbers from top-to-bottom, left-to-right per row
// R: output will be an integer that is the sum of the numbers in that row
// E:
// 1 -->  1
// 2 --> 3 + 5 = 8
// P: n = 3, (3 + 2 + 1) + 1 = 7. if n = 4, (4 + 3 + 2 + 1) + 1 = 11.


// ==============
// Solution 1
// ==============

function rowSumOddNumbers(n) {
  return n * n * n
}

// Apparently I don't know math.


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
