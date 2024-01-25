// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
// First Attempt - Sept 7, 2023


// =============
// Problem
// =============

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// function nbDig(n, d) {
//   // your code
// }

// P: input will be n, a positive integer including zero, and d, a positive integer between 0 and 9 inclusive
// R: output will be the number of times the digit d appears in the reult, where the result is all integers between and inclusive of 0 to n, raised to the power of 2. 
// E: 
// If n = 10 and d = 1, 0 <= k <= 10, then 0^2, 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, 7^2, 8^2, 9^2, 10^2, or 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. The digit 1 appears in 1, 16, 81, and 100, thus appears four times. 
// If n = 25, d = 1, the remaining results with the digit 1 in them are 1, 16, 81, 100, 121, 144, 169, 196, 361, and 441, in which 1 appears 11 times. 
// P: create an array of integers from 0 to n. square the array. split into one digit per element. filter out digits that are not d. return length of array.

// ==============
// Solution 1
// ==============

function nbDig(n, d) {
  let arr = []
  // create an array of integers from 0 to n. 
  for (let i = 0; i <= n; i++) {
    // square the array. 
    arr.push(i * i)
  }
  // split into one digit per element. 
  arr = [...arr].toString().split(",").join("").split("")
  console.log(arr)
  // filter out digits that are not d. 
  arr = arr.map(element => Number(element)).filter(element => element === d)
  console.log(arr)
  return arr.length
  // return length of array.
}


// ==============
// Tests
// ==============

const assert = require('chai').assert;
describe("nbDig", () => {
  it("Basic tests", () => {
    assert.strictEqual(nbDig(5750, 0), 4700, "n = 5750, d = 0");
    assert.strictEqual(nbDig(11011, 2), 9481, "n = 11011, d = 2");
    assert.strictEqual(nbDig(12224, 8), 7733, "n = 12224, d = 8");
    assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
  });
});