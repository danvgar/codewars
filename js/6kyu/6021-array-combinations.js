// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript
// First Attempt - Oct 27, 2023


// =============
// Problem
// =============

// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:
// Sum of integer combinations
// Sum of array singles

// function solve(arr) {
//   return 0;
// };


// ==============
// PREP
// ==============

// input is an array of integer arrays. 
// edge-cases? numbers as strings? booleans? empty arrays? null? negative numbers? no

// output will be an integer, that represents the total number of unique arrays possible when pulling one unique element from each subarray. 

// loop through array to remove duplicates from subarrays => map(), Set()
// option 1: nested arrays - too brute force
// option 2: # of unique combinations = product of the quantity of elements in each array => arr.length, Set.size

// mvp
// refactorization


// ==============
// Solution 1
// ==============

function solve(arr) {
  console.log(arr)

  // MVP (1st fastest)
  // Loop through parent array
  // for (let i = 0; i < arr.length; i++) {
  //   Replace each subarray with duplicates removed
    // arr[i] = new Set(arr[i]).size
  // }
  // Now we have an array of quantity of unique elements
  // return arr.reduce((prod, c) => prod * c, 1)

  // refactor 1 (3rd fastest)
  // return arr.map( subArr => subArr = new Set(subArr).size ).reduce( (prod,c) => prod * c, 1)

  // refactor 2 (2nd fastest)
  return arr.reduce( (prod, subArr) => prod * new Set(subArr).size, 1)
};

console.log(solve([[1, 2], [3], [4]]), "(Expected: 2)") // [1,3,4], [2,3,4]
console.log(solve([[1, 2, 2], [3, 4], [5]]), "(Expected: 4)") // [1,3,5], [2,4,5], [1,4,5], [2,4,5]
console.log( solve([ [0,0,0], [2,2,2], [3,2,1] ]), "(Expected: 3)")


// ==============
// Tests
// ==============

describe("Basic tests", function () {
  Test.assertEquals(solve([[1, 2], [4], [5, 6]]), 4);
  Test.assertEquals(solve([[1, 2], [4, 4], [5, 6, 6]]), 4);
  Test.assertEquals(solve([[1, 2], [3, 4], [5, 6]]), 8);
  Test.assertEquals(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72);
});