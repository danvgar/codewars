// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
// First Attempt - July 25, 2024

// =============
// Problem
// =============

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
}

// ==============
// Solution 1
// ==============

// Input: Two arguments as string: animal name and dish name.

// Output: Return true or false based on whether the dish starts and ends with same letters as animal's name.

// Edge-cases:
// Will arguments always be strings? Will there always be two arguments? Any funny business (null, NaN, etc)?
// Strings always lowercase, at least two letters, may have hyphens or spaces, no white space at ends of string. No numerals, symbols, etc.

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
}

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
