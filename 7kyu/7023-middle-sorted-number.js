// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
// First Attempt - June 1, 2023


// =============
// Problem
// =============

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// function gimme (triplet) {

// }

// P: input will be an array of three numbers. do not need to test for edge cases such as an empty array, null, undefined, other variable types, or other array lengths. Numbers can be integers, floats, negatives, or mixed. 
// R: result should take the median number of the three and return the index of that number from the original array.
// E: [2, 3, 1] -> 0; [5, 10, 14] -> 1
// P: 
// let sortedArray = triplet.sort((a,b) => a - b)
// return triplet.indexOf(sortedArray[1])


// ==============
// Solution 1
// ==============

function gimme (triplet) {
  console.log(`Input: ${triplet}`)

  let originalArray = triplet
  let sortedArray = originalArray.sort((a,b) => a-b)
  console.log(`Input: ${originalArray}`)
  console.log(`Sorted: ${sortedArray}`)
  console.log(`Spliced: ${sortedArray[1]}`)
  
  return triplet.indexOf(sortedArray[1])
}

// for some reason originalArray and triplet are getting sorted no matter how I rearrange the variables. need to revisit


// ==============
// Tests
// ==============

const strictEqual = require('chai').assert.strictEqual;

function doTest (triplet, expected) {
  const actual = gimme(triplet);
  strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
}

describe("Basic Test", function () {
  it("Tests for integers", function () {
    doTest([2, 3, 1], 0);
    doTest([5, 10, 14], 1);
  });
  it("Tests for floats", function () {
    doTest([2.1, 3.2, 1.4], 0);
    doTest([5.9, 10.4, 14.2], 1);
  });
  it("Tests for negative numbers", function () {
    doTest([-2, -3, -1], 0);
    doTest([-5, -10, -14], 1);
  });
  it("Tests for mixed numbers", function () {
    doTest([-2, -3.2, 1], 0);
    doTest([-5.2, -10.6, 14], 0);
  });
});