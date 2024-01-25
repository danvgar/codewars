// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
// First Attempt - Apr 14, 2023


// =============
// Problem
// =============

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name){
//     //your code here
// }


// ==============
// Solution 1
// ==============

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// #firsttry

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
        assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
    })
})
