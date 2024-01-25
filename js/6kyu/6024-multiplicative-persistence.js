// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// First Attempt - Oct 31, 2023


// =============
// Problem
// =============

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//   //code me
// }


// ==============
// PREP
// ==============

// input will be a positive integer. any edge cases to consider, such as numbers as strings? other data types?

// output will be the number of iterations it takes to multiply a number by its own digits, such that it eventually multiplies into a single digit number

// examples

console.log(persistence(10), `Expected: 1`) // 1 * 0 = 0
console.log(persistence(39), `Expected: 3`) // 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4
console.log(persistence(4), `Expected: 0`) // already a single digit 

// ==============
// Solution 1
// ==============

function persistence(num) {
  console.log(`Input: ${num}`)

  // number to string array -> num.toString().split("")
  function convertNumtoArr(num) {
    return num.toString().split("").map(n => Number(n))
  }
  let numArr = convertNumtoArr(num)

  console.log(`Initial Array: ${numArr}`)
  // we should now have an integer array

  // replace array with new array, until array length === 1
  let i = 0
  while (numArr.length > 1) {
    console.log(`Current numArr: ${numArr}`)
    console.log(`Current numArr Length: ${numArr.length}`)

    numArr = convertNumtoArr(numArr.reduce((acc, c) => acc * c, 1))

    i++
    console.log(`New numArr: ${numArr}`)
  }

  // once that is true, return number of iterations
  console.log(`Output: ${numArr[0]}\n`)
  return i
}

// ==============
// Refactoring 1
// ==============

function persistence(num) {
  // convert number to string
  num = num.toString()

  // number of iterations
  // if while loop never runs, returns 0
  let i = 0

  while (num.length > 1) {
    num = num
      // turn string into an array
      .split("")
      // convert string to numbers and multiply across
      .reduce((acc, c) => acc + +c, 1)
      // convert back to a string
      .toString()

      // increment number of iterations
    i++
  }

  // return number of iterations
  return i
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39), 3);
    assert.strictEqual(persistence(4), 0);
    assert.strictEqual(persistence(25), 2);
    assert.strictEqual(persistence(999), 4);
  });
});