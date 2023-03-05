// https://www.codewars.com/kata/5265326f5fda8eb1160004c8
// First Attempt - Mar 5, 2023

// =============
// Problem
// =============

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


// ==============
// Solution 1
// ==============

function numberToString(num) {
    return `${num}`
}


// ==============
// Tests
// ==============

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
