// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
// First Attempt - Aug 6, 2023


// =============
// Problem
// =============

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// function sumDigits(number) {
// }


// ==============
// Solution 1
// ==============

function sumDigits(number) {
  if(number < 0) {
    number = Math.abs(number)
  }
  return [...String(number)].reduce((acc,c) => Number(acc) + Number(c), 0)
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("printerError",function() {
  it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
  })})