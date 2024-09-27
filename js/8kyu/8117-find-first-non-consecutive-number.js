// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
// First Attempt - Sept 27, 2024

// =============
// Problem
// =============

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

// function firstNonConsecutive (arr) {

// }

// ==============
// Solution 1
// ==============

// Inputs: Integer array with at least 2 elements. May be positive, negative, or zero.
// Outputs: First integer that is not consecutive.
// Edge-Cases: If all integers are consecutive, return null.

function firstNonConsecutive(arr) {
  // Filter array where arr[i] !== arr[i + 1] - 1
  // Return integer in array
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i + 1] - 1 && arr[i + 1] ) {
      return arr[i + 1]
    }
  }
  return null
}

// need to revisit. "&& arr[i + 1]" in if conditional can't handle zeroes, because they are falsy values.

// Examples:
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6);
console.log(firstNonConsecutive([1, 2, 3, 4]), null);

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("a simple example", function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
    assert.strictEqual(first, 6);
  });

  it("all sequential", function () {
    const first = firstNonConsecutive([1, 2, 3, 4]);
    assert.strictEqual(first, null);
  });
});
