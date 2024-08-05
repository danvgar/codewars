// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
// First Attempt - Aug 20, 2023
// Second Attempt - Aug 4, 2024

// =============
// Problem
// =============

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// // Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// function getDivisorsCnt(n){
//   // todo
// }

// ==============
// Solution 1
// ==============

// P: input will be a positive integer. no need to test for edge cases
// R: ouput will be the quantity of divisors of this integer.
// E:
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// P:
// for loop, let i = 1, while i < n
// if integer / i is an integer, add i to list of divisors
// return length of array of divisors

function getDivisorsCnt(n) {
  console.log(`Input: ${n}`);
  // let divisorList = []
  let divisorCount = 0;
  // for loop, let i = 1, while i < n

  for (let i = 0; i <= n; i++) {
    // if integer / i is an integer, add i to list of divisors

    // if(Number.isInteger(n/i) && !divisorList.includes(i)) {
    if (Number.isInteger(n / i)) {
      divisorCount++;
    }
  }

  // return length of array of divisors
  // let divisorCount = divisorList.length
  console.log(`Output: ${divisorCount}`);
  return divisorCount;
}

function getDivisorsCnt(n) {
  console.log(`Input: ${n}`);
  // let divisorList = []
  let divisorCount = 0;

  // for loop, let i = 1, while i < n

  for (let i = 1; i <= n; i++) {
    // if integer / i is an integer, add i to list of divisors

    // if(Number.isInteger(n/i) && !divisorList.includes(i)) {
    if (Number.isInteger(n / i)) {
      divisorCount++;
    }
  }

  // return length of array of divisors
  // let divisorCount = divisorList.length
  console.log(`Output: ${divisorCount}`);
  return divisorCount;
}

function getDivisorsCnt(n) {
  let divisorCount = 0;
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) {
      divisorCount++;
    }
  }
  console.log(`Output: ${divisorCount}`);
  return divisorCount;
}

// optimization/math issue

// ==============
// Solution 2
// ==============

// Inputs: a positive number n that needs to be factorized
// Outputs: the number of divisors in n
// Edge-cases: n will not be negative, it will always be an integer, it will not be an integer represented as a string. if n = 1, return 1.

function getDivisorsCnt(n) {
  // console.log(`\n=======`);
  // console.log(`Input: ${n}`);
  // Count will be the number of divisors
  // Result will always be at minimum two divisors, such as when n is a prime number. so we can start divisor at 2
  let divisorCount = 2;

  // Edge-Cases:
  if (n < 0) return "Cannot check a negative number";
  if (n === 0) return 0;
  if (n === 1) return 1;

  // We only need to check for divisors lower than the square root, as those numbers will have a counter part larger than the square root as well. We round the sqrt to maintain it as an integer.
  let intSqrt = Math.sqrt(n);
  // console.log(`intSqrt: ${intSqrt}`);

  for (let divisor = 2; divisor <= intSqrt; divisor++) {
    // console.log(`\nCurrent divisor: ${divisor}`);
    
    // divisor represents the current number we are checking
    // if intSqrt % divisor === 0, it is a divisor and should be added to count
    
    // Note: it's counter part at the other end of the factorization list needs to be included as well, which can be solved with just count += 2. However, we need to make sure we are not accidentally double counting if n was a square (eg 16)
    // eg: 16 -> [1,2,4,8,16] -- five factors, but above would give us a count of six.
    
    // if divisor === intSqrt, count++
    // else intSqrt % divisor === 0, count += 2
    
    // console.log(`divisor ${divisor} === intSqrt ${intSqrt}?: ${divisor === intSqrt}`)
    // console.log(`n ${n} % divisor ${divisor}=== 0?: ${n % divisor === 0}`)
    if (divisor === intSqrt) {
      divisorCount++;
    }
    else if (n % divisor === 0) {
      divisorCount += 2;
    }
    // console.log(`Current divisorCount: ${divisorCount}`);
  }

  // Return count, the number of divisors
  // console.log(`Final divisorCount: ${divisorCount}`)
  return divisorCount;
}

// ==============
// Tests
// ==============

const assert = require("chai").assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getDivisorsCnt(1), 1);
    assert.strictEqual(getDivisorsCnt(10), 4);
    assert.strictEqual(getDivisorsCnt(11), 2);
    assert.strictEqual(getDivisorsCnt(54), 8);
  });
});

// Notes:

// A number can't have a prime factor greater than it's square root. e.g.

// Other approach: store all prime numbers in memory and use below method? May be faster

// Method to count divisors using prime factorization
// ***
// Positive Divisors -> (a + 1)(b+ 1)(c + 1) . . . (x + 1) where N = n^a * p^b * q^c ... y^x
// N = n^a * p^b * q^c ... y^x is the prime factorization
// (a + 1)(b+ 1)(c + 1) . . . (x + 1) are the exponents + 1 of the prime factorization.

// e.g. Prime factorization of 55
// 720 = 2 * 2 * 2 * 2 * 3 * 3 * 5
// 720 = 2^4 * 3^2 * 5^1
// # of divisors = (4 + 1)(2 + 1)(1 + 1)
// # of divisors = 5 * 3 * 2 = 30
