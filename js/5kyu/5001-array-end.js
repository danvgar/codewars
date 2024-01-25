// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// First Attempt - Apr 1, 2023


// =============
// Problem
// =============

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(arr) {
//     return
// }


// ==============
// Solution 1
// ==============

function moveZeros(arr) {
    // console.log(`Original Array: ${arr}`)
    let zeroes = arr.filter(a => a === 0)
    // console.log(`Zeroes Array: ${zeroes}`)

    let nonZeroes = arr.filter(a => a !== 0)
    // console.log(`Non Zeroes Array: ${nonZeroes}`)

    return nonZeroes.concat(zeroes)
}


// ==============
// Tests
// ==============

const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});