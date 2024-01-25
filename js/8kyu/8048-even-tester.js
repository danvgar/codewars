// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
// First Attempt - May 9, 2023


// =============
// Problem
// =============

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// function testEven(n) {
//     //Your awesome code here!
// }

// P: input is a single variable n, an integer or float, positive or negative. 
// R: result should be a boolean. 
// E: -4 --> true, 2 --> true, 0.5 --> false
// P: return if number % 2 === 0


// ==============
// Solution 1
// ==============

function testEven(n) {
    return n % 2 === 0
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("visible_tests", () => {
        assert.strictEqual(testEven(0), true, "testEven for 0");
        assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
        assert.strictEqual(testEven(1), false, "testEven for 1");
        assert.strictEqual(testEven(2), true, "testEven for 2");
        assert.strictEqual(testEven(-4), true, "testEven for 2");
    });
});
