// https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript
// First Attempt - Oct 13, 2024

// =============
// Problem
// =============

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// function angle(n) {
//   //code here
// }

// ==============
// Solution 1
// ==============

// Interior Angle Sum = (n - 2) * 180

function angle(n) {
  if (n <= 2) {
    return undefined;
  }
  else {
    return (n - 2) * 180
  }
}

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  });
});
