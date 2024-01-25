// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// First Attempt - Mar 24, 2023

// =============
// Problem
// =============

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord( bool ){
//     //...
// }

// ==============
// Solution 1
// ==============

function boolToWord(bool) {
    return bool === true ? "Yes" : "No"
}


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for basic tests", () => {
        assert.strictEqual(boolToWord(true), 'Yes')
        assert.strictEqual(boolToWord(false), 'No')
    });
});