// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
// First Attempt - Nov 4, 2023


// =============
// Problem
// =============

// A Narcissistic Number(or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

// For example, take 153(3 digits), which is narcissistic:

// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
// and 1652(4 digits), which isn't:

// 1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false(not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g.PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non - zero integers will be passed into the function.

// function narcissistic(value) {
//   // Code me to return true or false
// }


// ==============
// PREP
// ==============

// input will be a positive non-zero integer. no other edge cases to consider
// output will be a boolean true or false, with true being if the sum of the digits of that integer, with each digit raised to the power of the number of digits, is equal to the original number

// ==============
// Solution 1
// ==============

function narcissistic(value) {
  let arr = value
    // 1) convert value into an array with each digit as an element
    // 1a) convert value to string
    .toString()
    // 1b) split string into array
    .split("")
    // 1c) map across array to convert to Numbers
    .map(Number)


  // 2) map across array by raising power to the length of the array
  // 3) reduce array to a sum
  // 4) return value should be a conditional (value === ???? )
  return value === arr
    .map(element => Number(element) ** arr.length).reduce((acc, c) => acc + c, 0)
}

console.log(narcissistic(153), "Expected: true") // 1^3 + 5^3 + 3^3
console.log(narcissistic(1652), "Expected: false") // 1^4 + 6^4 + 5^4 + 2^4

// firsttryyyyy


// ==============
// Refactoring 1
// ==============

function narcissistic(value) {
  return value === value
    .toString()
    .split("")
    .map((item, i, arr) => item ** arr.length)
    .reduce((acc, c) => acc + c, 0)
}


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Example tests", function () {

  function dotest(input, expected) {
    const actual = narcissistic(input);
    assert.strictEqual(actual, expected, `Incorrect answer for value=${input}`)
  }

  it("Narcissistic numbers", function () {
    dotest(7, true);
    dotest(153, true);
  });

  it("Not narcissistic numbers", function () {
    dotest(122, false);
    dotest(487, false);
  });
});