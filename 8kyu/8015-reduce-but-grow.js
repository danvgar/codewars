// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// First Attempt - Mar 15, 2023
// Second Attempt - May 6, 2023

// =============
// Problem
// =============

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
// }


// ==============
// Solution 1
// ==============

function grow(x){
  let product = 1
  x.forEach(a => product *= a)
  return product
}


// ==============
// Solution 2
// ==============

function grow(x){
  return x.reduce((acc,c) => acc * c, 1)
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {  
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
  });
})
