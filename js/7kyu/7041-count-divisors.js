// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
// First Attempt - Aug 20, 2023


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


// ==============
// Solution 1
// ==============

function getDivisorsCnt(n) {
  console.log(`Input: ${n}`)
  // let divisorList = []
  let divisorCount = 0
  // for loop, let i = 1, while i < n

  for (let i = 0; i <= n; i++) {
    // if integer / i is an integer, add i to list of divisors 

    // if(Number.isInteger(n/i) && !divisorList.includes(i)) {
    if (Number.isInteger(n / i)) {
      divisorCount++
    }
  }

  // return length of array of divisors
  // let divisorCount = divisorList.length
  console.log(`Output: ${divisorCount}`)
  return divisorCount
}

function getDivisorsCnt(n) {
  console.log(`Input: ${n}`) 
  // let divisorList = []
  let divisorCount = 0


  // for loop, let i = 1, while i < n

  for (let i = 1; i <= n; i++) {
    // if integer / i is an integer, add i to list of divisors 

    // if(Number.isInteger(n/i) && !divisorList.includes(i)) {
    if (Number.isInteger(n / i)) {
      divisorCount++
    }
  }

  // return length of array of divisors
  // let divisorCount = divisorList.length
  console.log(`Output: ${divisorCount}`)
  return divisorCount
}

function getDivisorsCnt(n) {
  let divisorCount = 0
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) {
      divisorCount++
    }
  }
  console.log(`Output: ${divisorCount}`)
  return divisorCount
}

// optimization/math issue


// ==============
// Tests
// ==============

const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getDivisorsCnt(1), 1);
    assert.strictEqual(getDivisorsCnt(10), 4);
    assert.strictEqual(getDivisorsCnt(11), 2);
    assert.strictEqual(getDivisorsCnt(54), 8);
  });
});
