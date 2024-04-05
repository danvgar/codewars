// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
// First Attempt - Apr 4, 2024


// =============
// Problem
// =============

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// var maxSequence = function(arr){
//   // ...
// }

// ==============
// Solution 1
// ==============

// inputs will be an integer array
// outputs will be the maximum sum of a contiguous subsequence of the array

// edge cases:
// // empty array should return 0 -> arr.length === 0 (or just !arr)
// // an array of only negative numbers should return 0 -> arr.every()
// // an array of only positive numbers would just return the sum of the array -> arr.every().reduce()

// questions:
// // should we only consider contiguous to be front to back? should we ever consider one element at the end of the array and multiple elements from the start, as if it has looped the array?
// // will elements ever not be integers? numbers as strings? etc? will data structure ever not be an array?
// // any elements or arguments as null, undefined, undeclared? 

var maxSequence = function (arr) {
  console.log(`Input: ${arr}`)
  // array of all positive elements should return entire sum (optimize)
  // empty array should return max
  // array of all negative elements should return max

  // think of a stock market graph going up and down, and you want to track which period had the highest gains (including brief moments of losses)

  // Option 1: Brute force (Three pointer - nested for loops)
  // // Two-pointers moving across the array to create the current subarray, then one pointer moving across the subarray to sum it. 
  // // O(n^3) time

  // Option 2: Brute force (Two pointer - nested for loops)
  // // Two-pointers moving across the array. The inner pointer is added to the previous element, eliminating the need to sum the array using a reduce type method. 
  // // O(n^2) time

  // Option 3: "Kadane's Algorithm" (Single pointer)
  // // Single-pointer moving across the array. Compare the current element with the current element + the current max. If current max is getting smaller because of this current element, we can ignore it. The bigger one becomes the "final max"
  // // O(n) time

  // let currentMax = 0;
  let currentMax = 0;
  // let finalMax = 0;
  let finalMax = 0;
  // let finalArr = [];
  let finalArr = [];
  // if(!arr or !arr.length) return finalmax
  if (!arr || !arr.length) return finalMax
  // for arr.length
  for (let i = 0; i < arr.length; i++) {
    // if arr[i] < arr[i] + currentMax, currentMax += arr[i], finalArr.push(arr[i])
    currentMax = Math.max(arr[i], arr[i] + currentMax);
    // if currentMax > finalMax, finalMax = currentMax 
    if (currentMax > finalMax) finalMax = currentMax;
  }

  // Challenge: How would we also ensure we return the indices of the subarray that achieved this maximum?

  console.log(`Final Max: ${finalMax}`)
  console.log(`Final Array: ${finalArr}`)
  // return finalMax
  return finalMax
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([1, 2, 3, 4]), 10);
console.log(maxSequence([-1, -2, -3, -4]), 0);
console.log(maxSequence([]), 0);
console.log(maxSequence([9, 0, -1, 1, 0, 9]), 9);



// ==============
// Tests
// ==============

// const { assert } = require('chai');

// describe("maxSequence", function () {
//   it("should work on an empty array", function () {
//     assert.strictEqual(maxSequence([]), 0);
//   });
//   it("should work on the example", function () {
//     assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//   });
// });