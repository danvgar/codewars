// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// First Attempt - Sept 17, 2023

// =============
// Problem
// =============

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers){

// }

// P: input is an 10-digit integer array. No need to test edge-cases
// R: output is a string that is the same array and order of numbers, in US phone number format. First three digits in parenthesis, a space, the next 3 digits consecutively, a hyphen, followed by the remaining four digits.
// E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] -> (123) 456-7890
// P:
// declare array starting with "("
// loop through array, pushing into above variable. 
// after pushing index 2, push ") ", including space 
// after pusning index 5, push "-"
// join declared variable and return. 


// ==============
// Solution 1
// ==============

function createPhoneNumber(numbers) {
  let phoneNum = ["("]
  numbers.forEach((element, index) => {
    phoneNum.push(element)
    if (index === 2) {
      phoneNum.push(") ")
    }
    if (index === 5) {
      phoneNum.push("-")
    }
  })
  phoneNum = phoneNum.join("")
  return phoneNum
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});