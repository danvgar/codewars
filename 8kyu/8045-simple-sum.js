// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
// First Attempt - May 3, 2023


// =============
// Problem
// =============

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// function sumStr(a,b) {

// }


// ==============
// Solution 1
// ==============

function sumStr(a,b) {
    return String(Number(a) + Number(b))
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Tests example test cases", () => {
        assert.strictEqual(sumStr("4","5"), "9");
        assert.strictEqual(sumStr("34","5"), "39");
    });
});
