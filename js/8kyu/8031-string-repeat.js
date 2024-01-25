// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// First Attempt - Apr 11, 2023
// Second Attempt - May 6, 2023



// =============
// Problem
// =============

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr (n, s) {
//     return '';
// }


// ==============
// Solution 1
// ==============

function repeatStr (n, s) {
    let finalString = ""
    for(let i = 0; i < n; i++) {
        finalString += s
    }
    return finalString
}

// #firsttry


// ==============
// Solution 2
// ==============

function repeatStr (n, s) {
    return s.repeat(n)
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function() {
    it ("Basic tests", function() {
        assert.strictEqual(repeatStr(3, "*"), "***");
        assert.strictEqual(repeatStr(5, "#"), "#####");
        assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    });
});