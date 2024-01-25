// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// First Attempt - Mar 22, 2023
// Second Solutoin - May 6, 2023

// =============
// Problem
// =============

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//     // Code?
// }

// ==============
// Solution 1
// ==============

function makeNegative(num) {
    if (num < 0) {
        return num 
    } else if (num >= 0) {
        return num * -1
    }
}


// ==============
// Solution 2
// ==============

function makeNegative(num) {
    return num > 0 ? -num : num
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(makeNegative(42), -42);
    });
});
