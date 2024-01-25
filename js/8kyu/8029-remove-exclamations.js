// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// First Attempt - Apr 4, 2023
// Second Solution - May 6, 2023


// =============
// Problem
// =============

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
// }


// ==============
// Solution 1
// ==============

function removeExclamationMarks(s) {
    return s.split("").filter(a => a !== "!").join("")
}


// ==============
// Solution 2
// ==============

function removeExclamationMarks(s) {
    return s.split("!").join("")
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    });
});
