//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
// First Attempt - Feb 23, 2025

// =============
// Problem
// =============

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// function largestPairSum (numbers) {
//   //TODO: Write your Code here
// }

// ==============
// Solution 1
// ==============

// Input: integer array
// Output: integer -> largest sum possible with any two numbers

// Edge-Cases:
// - Will numbers ever be negative
// - Will input ever be anything besides an array?
// - Any special output if more than one possibility?
// - Array ever have anything other than numbers?
// - Any reason not to sort array?

function largestPairSum (numbers) {
  let sum = 0;
  let sortedArray = numbers.sort((a,b) => b - a);
  return sortedArray[0] + sortedArray[1]
}

// ==============
// Tests
// ==============

const strictEqual = require("chai").assert.strictEqual;

function doTest (array, expected) {
  const actual = largestPairSum(array);
  strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
}

it("Basic tests", () => {
    doTest([10,14,2,23,19], 42);
    doTest([-100,-29,-24,-19,19], 0);
    doTest([1,2,3,4,6,-1,2], 10);
    doTest([-10, -8, -16, -18, -19], -18);
});
