// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// First Attempt - June 27, 2023


// =============
// Problem
// =============

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// function otherAngle(a, b) {
//   return 0;
// }


// ==============
// Solution 1
// ==============

function otherAngle(a, b) {
  return 180 - a - b
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});