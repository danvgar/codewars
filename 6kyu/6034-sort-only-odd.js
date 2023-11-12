// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// First Attempt - Nov 11, 2023


// =============
// Problem
// =============

// You will be given an array of numbers.You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   // Return a sorted array.
// }


// ==============
// PREP
// ==============

// input will be an integer array. an empty array should return an empty array. no other funny business to consider.
// output will be the same integer array, but with odd numbers sorted from lowest to highest value. All even number positions should remain the same.

// brute force method would be to copy all odd numbers into a separate array and sort it. then loop through original array, and everytime you encounter an odd number, replace it with the next index of the odd-array

// ==============
// Solution 1
// ==============

function sortArray(array) {
  // an empty array should return an empty array.

  if (array.length === 0) {
    return array
  }

  let odds = array.filter(num => Math.abs(num % 2) === 1).sort((a, b) => a - b)
  let j = 0

  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] % 2) === 1) {
      array[i] = odds[j]
      j++
    }
  }

  return array
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]), []);
  });
});
