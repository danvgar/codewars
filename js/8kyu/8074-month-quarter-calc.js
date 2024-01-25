// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// First Attempt - June 13, 2023


// =============
// Problem
// =============

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// const quarterOf = (month) => {
//   // Your code here
// }

// ==============
// Solution 1
// ==============

const quarterOf = (month) => {
  switch(true) {
    case month <= 3:
    return 1
    
    case month >= 4 && month <= 6:
    return 2
    
    case month >= 7 && month <= 9:
    return 3

    case month >= 10:
    return 4
  }
}

// need to make anki out of this one, some good solutions here to practice switch cases


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});
