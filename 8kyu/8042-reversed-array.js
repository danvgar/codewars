// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// First Attempt - Apr 30, 2023


// =============
// Problem
// =============

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//     //code here
// }


// ==============
// Solution 1
// ==============

function digitize(n) {
    return String(n).split("").reverse().map(n => Number(n))
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(digitize(35231),[1,3,2,5,3]);
        assert.deepEqual(digitize(0),[0]);
    });
});
