// https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript
// First Attempt - June 16, 2023


// =============
// Problem
// =============

// Now you have to write a function that takes an argument and returns the square of it.


// ==============
// Solution 1
// ==============

function square(a) {
  return a*a
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});
