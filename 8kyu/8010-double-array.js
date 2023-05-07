// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// First Attempt - Mar 9, 2023
// Refactoring - Mar 14, 2023

// =============
// Problem
// =============

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x){
// }


// ==============
// Solution 1
// ==============

function maps(x){
    let doubledArray = []
    x.forEach((a,i) => doubledArray.push(a*2))
    return doubledArray
}


// ==============
// Solution 2
// ==============

function maps(x){
    x = x.map(a => a*2)
    return x
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", ()=>{
    it("Fixed tests", () => {
        assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
        assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
        assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
    });
});