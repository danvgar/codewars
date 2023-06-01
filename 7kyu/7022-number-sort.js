// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
// First Attempt - May 29, 2023


// =============
// Problem
// =============

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums){
  
// }

// P: input will be an array of negative or positive integers, or an empty array, or null
// R: output should be the same array of integers, sorted from lowest to highest value. an empty array or null should return an empty array.
// E: [] -> [], null -> [], [20, 2, 10] -> [2, 10, 20]
// P: if nums.sort()


// ==============
// Solution 1
// ==============

function solution(nums){
  if(!Array.isArray(nums) || nums.length === 0) {
    return []
  } else{
    return nums.sort( (a,b) => a - b)
  }
}

// look into TypedArray objects


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
    assert.deepEqual(solution(null), [])
    assert.deepEqual(solution([]), [])
    assert.deepEqual(solution([20, 2, 10]), [2,10,20])
    assert.deepEqual(solution([2, 20, 10]), [2,10,20])
  })
})