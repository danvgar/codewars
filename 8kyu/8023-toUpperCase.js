// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
// First Attempt - Mar 25, 2023

// =============
// Problem
// =============

// Write a function which converts the input string to uppercase.

// function makeUpperCase(str) {
// }

// ==============
// Solution 1
// ==============

function makeUpperCase(str) {
    return str.toUpperCase()
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Basic Tests", function(){
    it("should pass the basic tests", function(){
        assert.strictEqual(makeUpperCase(""),           "");
        assert.strictEqual(makeUpperCase("hello"), "HELLO");
        assert.strictEqual(makeUpperCase("Hello"), "HELLO");
        assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
    });
});