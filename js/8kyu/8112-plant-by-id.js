// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
// First Attempt - August 1, 2024

// =============
// Problem
// =============

// Your function takes two arguments:
// 1. current father's age (years)
// 2. current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
// }

// ==============
// Solution 1
// ==============

// Input: two arguments, father's age and son's age, in integers
// Output: Integer representing how many years ago or from now the father is twice as old as the son.
// Edge-cases: input will always be two arguments, input will always be an integer, input will not be an integer represented as a string

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// Tests and Examples
console.log(twiceAsOld(36, 7), 22)
// 7 * 2 = 14
// abs(36 - 14) = 22
console.log(twiceAsOld(55, 30), 5)
console.log(twiceAsOld(42, 21), 0)
console.log(twiceAsOld(22, 1), 20)
console.log(twiceAsOld(29, 0), 29)

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample tests", function () {
  it("Testing for dad's age: 36 and son's age: 7", function () {
    assert.strictEqual(twiceAsOld(36, 7), 22);
  });
  it("Testing for dad's age: 55 and son's age: 30", function () {
    assert.strictEqual(twiceAsOld(55, 30), 5);
  });
  it("Testing for dad's age: 42 and son's age: 21", function () {
    assert.strictEqual(twiceAsOld(42, 21), 0);
  });
  it("Testing for dad's age: 22 and son's age: 1", function () {
    assert.strictEqual(twiceAsOld(22, 1), 20);
  });
  it("Testing for dad's age: 29 and son's age: 0", function () {
    assert.strictEqual(twiceAsOld(29, 0), 29);
  });
});
