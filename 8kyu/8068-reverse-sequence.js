// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
// First Attempt - June 2, 2023


// =============
// Problem
// =============

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   return [];
// };

// P: input is a positive integer. Do not need to consider edge cases
// R: output is an array of all of the integers (inclusive) between the input and 1
// E: 5 -> [5,4,3,2,1]
// P: for i <= n and i = 1, push i into array and iterate i. then reverse array.


// ==============
// Solution 1
// ==============

const reverseSeq = n => {
  let arr = []
  for(let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.reverse()
}

// #firsttry


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});