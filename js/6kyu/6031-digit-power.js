// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
// First Attempt - Nov 8, 2023


// =============
// Problem
// =============

// Some numbers have funny properties.For example:

// 89 -- > 8¹ + 9² = 89 * 1

// 695 -- > 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 -- > 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// function digPow(n, p) {
//   // ...
// }


// ==============
// PREP
// ==============

// input is positive intergers n and p. n represents the number to be studied. p represents the starting exponent to raise each digit to successively. n and p will never be negative numbers. can n or p ever be zero? Any other edge cases to consider, such as numbers as strings, null, undefined, etc?
// output is k (if it exists) or -1 if false.


// ==============
// Solution 1
// ==============

function digPow(n, p) {
  // (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k

  // break number into digits in an array (String(num).split("").map(Number))
  let arr = String(n).split("").map(Number)

  // loop through array, raise each digit to p + i (for loop or map)
  // sum every digit in the array (reduce)
  let sum = arr.map((num, i) => num ** (p + i)).reduce((acc, c) => acc + c, 0)
  let k = sum / n

  // does sum divided by n equal an integer? if yes, return integer, if not, return -1 (Number.isInteger())
  // return k or -1 (ternary operator)
  return Number.isInteger(k) ? k : -1
}

console.log(digPow(89, 1), `Expected k: 1`) // 8^1 + 9^2 === 8 + 81 === 89 === 89 ^ 1
console.log(digPow(92, 1), `Expected k: -1`) // 9^1 + 2^2 === 89 + 4 === 93 !== 92 ^ 1
console.log(digPow(695, 2), `Expected k: 2`) // 6^2 + 9^3 + 5^4 === 36 + 819 + 625 ===  1390 === 695 ^ 2


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(digPow(89, 1), 1)
    Test.assertEquals(digPow(92, 1), -1)
    Test.assertEquals(digPow(46288, 3), 51)

  });
});
