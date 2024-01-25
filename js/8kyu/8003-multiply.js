// https://www.codewars.com/kata/50654ddff44f800200000004
// First Attempt - Mar 4, 2023

// =============
// Problem
// =============

// This code does not execute properly. Try to figure out why.

// function multiply(a, b){
//     a * b
// }


// ==============
// Solution 1
// ==============

function multiply(a, b){
    return a * b
}


// ==============
// Tests
// ==============

const assert = require("chai").assert;

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1,1), 1);
        assert.strictEqual(multiply(2,1), 2);
        assert.strictEqual(multiply(2,2), 4);
        assert.strictEqual(multiply(3,5), 15);   
    });
});