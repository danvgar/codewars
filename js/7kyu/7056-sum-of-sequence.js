// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
// First Attempt - Oct 8, 2024

// =============
// Problem
// =============

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
// };

// ==============
// Solution 1
// ==============

// __Inputs:
// begin: integer -> starting integer of the sequence
// end: integer -> final integer of sequence
// step: integer -> incremental step of sequence

// __Edge-cases:
// if begin > end, return 0
// if end is greater than final number of sequence, don't add it to sum
// integers as strings?
// missing parameters or default values?

// __Outputs:
// sum: integer -> the sum of the sequence from begin to end, using incremental steps as provided

const sequenceSum = (begin, end, step) => {
  // If begin > end, return 0
  if (begin > end) return 0;

  // __Approach 1 - Brute Force
  // Create sequence as an array, starting with begin
  // Running sum = sum of array elements
  // While last element < end, push last element + step
  // return sum
  let sequence = [begin, ];
  let lastElement = sequence[sequence.length - 1];
  while (lastElement + step <= end) {
    sequence.push(lastElement + step);
    lastElement = sequence[sequence.length - 1];
  }
  let sum = sequence.reduce((acc, c) => acc + c, 0);
  return sum
};

// __Examples:
console.log(sequenceSum(2, 2, 2), 2); // 2
console.log(sequenceSum(2, 6, 2), 12); // 12 (2 + 4 + 6)
console.log(sequenceSum(1, 5, 1), 15); // 15 (1 + 2 + 3 + 4 + 5)
console.log(sequenceSum(1, 5, 3), 5); // 5 (1 + 4)

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12);
    assert.strictEqual(sequenceSum(1, 5, 1), 15);
    assert.strictEqual(sequenceSum(1, 5, 3), 5);
  });
});
