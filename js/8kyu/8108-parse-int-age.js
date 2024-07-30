// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
// First Attempt - July 25, 2024

// =============
// Problem
// =============

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
// }

// ==============
// Solution 1
// ==============

// Input: a string in the form of "x years old" for numbers 0 and 2-9, or "x year old" for number 1, where x is an integer from 0-9.
// Edge-Cases: input will always be a string. x will always be a positive single-digit integer.
// Output: an integer representing the age x from the string

function getAge(inputString) {
  return parseInt(inputString[0])
}

console.log(getAge("5 years old"), 5)
console.log(getAge("1 year old"), 1)
console.log(getAge("0 years old"), 0)

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(getAge("4 years old"), 4);
    assert.strictEqual(getAge("9 years old"), 9);
    assert.strictEqual(getAge("1 year old"), 1);
  });
});
