// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
// First Attempt - Dec 2, 2023


// =============
// Problem
// =============

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89 = 8^1 + 9^2 

// The next number in having this property is 

// See this property again: 
// 135 = 1^1 + 3^2 + 5^3 

// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b] the function should output an empty list.

// 90, 100 --> []

// Enjoy it!!

// function sumDigPow(a, b) {
//   // Your code here
// }


// ==============
// PREP
// ==============

// input will be two integers a, b representing the range [a, b] inclusive.
// // will input ever have a larger than b?
// // will input every be non-integers?
// // will any input ever be missing?
// // will input ever be a number as a string?

// output will be an array of integers, inclusively in the range [a,b], whose digits xyz satisfy the condition xyz = x^1 + y^2 + z^3 + ... 
// if no numbers exist in this range, return an empty array


// ==============
// Solution 1
// ==============

function sumDigPow(a, b) {
  console.log(`\nInput: [${a}, ${b}]`)

  // create array from a to b
  let arr = Array.from(Array(b - a + 1), (_, i) => a + i)
  console.log(`Current Array: ${arr}`)

  // helper function: does num satisfy condition? return boolean
  // // num to string
  // // split string to array
  // // if reduced array is equal to original num, return true
  // // else return false
  const checkDigit = num => num === [...num.toString()].reduce((acc, c, i) => acc + Math.pow(c, i + 1), 0)

  // filter out items based on helper function
  // return arr
  console.log(`Final Array: ${arr.filter(checkDigit)}`)
  return arr.filter(checkDigit)
}

console.log(sumDigPow(1, 10)`Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]`)
console.log(sumDigPow(1, 100)`Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]`)
console.log(sumDigPow(10, 100)`Expected: [89]`)
console.log(sumDigPow(90, 100)`Expected: []`)


// ==============
// Refactoring 1
// ==============

function sumDigPow(a, b) {
  let arr = Array.from(Array(b - a + 1), (_, i) => a + i)
  const checkDigit = num => num === [...num.toString()].reduce((acc, c, i) => acc + Math.pow(c, i + 1), 0)
  return arr.filter(checkDigit)
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;

describe("Tests", function () {
  it("Fixed tests", function () {
    assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
    assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
    assert.deepEqual(sumDigPow(10, 100), [89])
    assert.deepEqual(sumDigPow(90, 100), [])
    assert.deepEqual(sumDigPow(90, 150), [135])
    assert.deepEqual(sumDigPow(50, 150), [89, 135])
    assert.deepEqual(sumDigPow(10, 150), [89, 135])
  });
});