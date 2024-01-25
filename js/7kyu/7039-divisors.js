// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
// First Attempt - Aug 18, 2023
// Refactoring - Aug 18, 2023


// =============
// Problem
// =============

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// function divisors(integer) {

// };

// P: input will be any integer greater than 1. no other edge cases need to be tested.
// R: output will be an array of all of the divisors of the integer, except for 1 and itself. If the integer is prime, the string "${integer} is prime" should be returned. 
// E: 
// 12 -> [2,3,4,6]
// 13 -> "13 is prime"
// P: 
// create an empty array to return
// loop through integer from 1 < i < integer
// if integer % i > 1, push to return array. 
// after loop, if array length is zero, return "${integer} is prime", else return integer array


// ==============
// Solution 1
// ==============

function divisors(integer) {
  // create an empty array to return
  // console.log(`\nInput Integer: ${integer}`)
  let divisorArray = []
  // loop through integer from 1 < i < integer
  for (let i = 1; i < integer; i++) {
    // if integer % i > 1, push to return array. 
    // console.log(`Current Index: ${i}`)
    let currentDivisor = integer / i
    // console.log(`Current Divisor Tested: ${currentDivisor}`)
    if (currentDivisor > 1 && currentDivisor < integer && Number.isInteger(currentDivisor)) {
      // console.log(`Is Current Divisor > 1 ?: ${currentDivisor > 1}`)
      // console.log(`Is Current Divisor < ${integer} ?: ${currentDivisor < integer}`)
      // console.log(`Is Current Divisor an integer?: ${Number.isInteger(currentDivisor)}`)
      divisorArray.push(i)
      // console.log(`Current Array: ${divisorArray}`)
    }
    // console.log(`\n`)
  }
  // after loop, if array length is zero, return "${integer} is prime", else return integer array
  if (divisorArray.length === 0) {
    // console.log(`\n`)
    // console.log(`${integer} is prime`)
    return `${integer} is prime`
  } else {
    // console.log(`\n`)
    // console.log(`Final Array: ${divisorArray}`)
    return divisorArray
  }
};


// ==============
// Refactoring 2
// ==============

function divisors(integer) {
  let divisorArray = []
  for (let i = 1; i < integer; i++) {
    let currentDivisor = integer / i
    if (currentDivisor > 1 && currentDivisor < integer && Number.isInteger(currentDivisor)) {
      divisorArray.push(i)
    }
  }
  return divisorArray.length === 0 ? `${integer} is prime` : divisorArray
};


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(divisors(15), [3, 5]);
    Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
    Test.assertDeepEquals(divisors(13), "13 is prime");
  });
});
