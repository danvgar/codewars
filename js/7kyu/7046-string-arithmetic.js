// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
// First Attempt - Sept 5, 2023


// =============
// Problem
// =============

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

// function arithmetic(a, b, operator){
//   //your code here!
// }


// ==============
// Solution 1
// ==============

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b
    case "subtract":
      return a - b
    case "divide":
      return a / b
    case "multiply":
      return a * b
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
    assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
    assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
    assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
    assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
  })
})