// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// First Attempt - Sept 16, 2023


// =============
// Problem
// =============

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//   //happy coding!
//   return 0;
// }

// P: input will be an array of integers, where onle one of the integers appears an odd number of times
// R: output should be the integer that appears an odd number of times. 
// E: 
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// P: 
// loop through array.
// count frequency of each element (.filter( element => element === A[i])).length
// if occurence % 2 === 1, return A[i]


// ==============
// Solution 1
// ==============

function findOdd(A) {
  // loop through array.
  for (let i = 0; i < A.length; i++) {
    // count frequency of each element (.filter( element => element === A[i])).length
    let occurence = A.filter(element => element === A[i]).length
    console.log(occurence)
    console.log(occurence % 2 === 1)
    // if occurence % 2 === 1, return A[i]
    if (occurence % 2 === 1) {
      return A[i]
    }
  }
}


// ==============
// Solution 2
// ==============

// input will be an integer array, where only one integer appears an odd number of times. no other funny business
// output will be the integer that appears an odd number of times.

function findOdd(arr) {
  // whenever I think of an array that has conditional requirements, I think of filter
  // loop through the array and check if filtering the array by each element results in an even length or an odd length
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter(num => num === arr[i]).length % 2 === 1) {
      return arr[i]
    }
  }

  // not the most efficient. ideally we want to go through each unique item. (Set?)
  // let unique = new Set(arr)
}


// ==============
// Tests
// ==============

const assert = require('chai').assert;

describe('Example tests', function () {

  function doTest(a, n) {
    assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`);
  }

  it("Example tests", () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1, 1, 2], 2);
    doTest([0, 1, 0, 1, 0], 0);
    doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
  });

  it("Fixed tests", () => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
  });
});