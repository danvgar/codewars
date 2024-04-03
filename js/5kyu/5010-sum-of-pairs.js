// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
// First Attempt - Apr 3, 2024


// =============
// Problem
// =============

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// function sumPairs(ints, s) {
//   return [0, 0] || undefined;
// }

// ==============
// Solution 1
// ==============

// input will be an integer and a single sum value
// output will be an array of two integers that add up to the sum value
// // if there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution
// // if there are no pairs of values that can be added to produce the sum value, return undefined
// // negative numbers and duplicate numbers can and will appear
// // there will also be lists tested of lengths upwards of 10,000,000 elements
// edge cases: 

function sumPairs(ints, s) {
  console.log("\====================");
  console.log("\nNext Test");
  console.log("\====================");
  console.log("\nInput: ", ints, s);
  // Option 1: Brute Force
  // Option 2: One-Pass Hash Map

  // Set up a hash map to store the values as val : index
  const lookup = new Map();
  // Loop through the list of integers
  for (let i = 0; i < ints.length; i++) {
    let target = s - ints[i]; 
    console.log("\nCurrent integer: ", ints[i], i);
    console.log("Current target: ", target)
    // Check if the difference between the sum value and the current integer is in the hash map
    if(lookup.has(target)) {
      // If it is, return the current integer and the difference
      console.log("Added to lookup: ", ints[i], i);
      console.log("\nFinal integer pair: ", [lookup.get(target), ints[i]] );
      return [target, ints[i]] 
    }
    else {
      // If it is not, add the current integer to the hash map (val : index)
      // Set as val : index key-value pair
      console.log("Added to lookup: ", ints[i], i);
      lookup.set(ints[i], i);
    }
  }
  // If no pair is found, return undefined
  console.log("No pair found");
  return undefined
}


// ==============
// Refactored 1
// ==============

function sumPairs(ints, s) {
  const lookup = new Map();

  for (let i = 0; i < ints.length; i++) {
    let target = s - ints[i]; 
    if(lookup.has(target)) {
      return [target, ints[i]] 
    }
    else lookup.set(ints[i], i);
  }
  return undefined
}


// ==============
// Tests
// ==============

import { assert } from 'chai';
import { describe } from 'mocha';

describe("Sum of Pairs", function () {
  it("Example Tests", function () {
    assert.deepEqual(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
    assert.deepEqual(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
    assert.deepEqual(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
    assert.deepEqual(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
    assert.deepEqual(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
    assert.deepEqual(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
    assert.deepEqual(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
    assert.deepEqual(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");
  });
});