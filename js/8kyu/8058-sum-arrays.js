// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// First Attempt - May 18, 2023


// =============
// Problem
// =============

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// // Sum Numbers
// function sum (numbers) {
//   "use strict";
// };


// ==============
// Solution 1
// ==============

function sum (numbers) {
  if(numbers === []) {
    return 0
  } else {
    return numbers.reduce( (acc,c) => acc + c, 0)
  }
}

// #firsttry


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(sum([]), 0);
    Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});
