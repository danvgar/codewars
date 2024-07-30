// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
// First Attempt - July 29, 2024

// =============
// Problem
// =============

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// function cockroachSpeed(s) {
//   //Good Luck!
// }

// ==============
// Solution 1
// ==============

// Input: real number greater than or equal to zero, represents speed in km/h
// Output: floored integer representing speed in cm/s.
// 1 km/h === 27.7778 cm/s

// Edge-cases: Input will always be a real zero or positive number.

//

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778)
}

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});
