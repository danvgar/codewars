// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
// First Attempt - Nov 10, 2023


// =============
// Problem
// =============

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// function isPrime(num) {
//   //TODO
// }


// ==============
// PREP
// ==============

// input will be an integer, positive or negative. no need to consider edge cases such as an intger as a string, null, undefined, or other data types. integer will not be larger than 2^31
// output will be a boolean, whether the given integer is a prime number or not. 

// mathematically, multiple methods to test primality of a number. Easiest is to test between 2 and sqrt(n). This is because you already know 1 is a factor, and numbers start to repeat past the square root, which is where the divisors start to approach equal.
// https://en.wikipedia.org/wiki/Primality_test#Simple_methods

// special cases
// negative numbers cannot be prime because -3 has divisors 1 * -3 and -1 * 3.
// zero and one are not prime

// additional optimization: never need to test for even numbers. 


// ==============
// Solution 1
// ==============

function isPrime(num) {
  console.log(`\nInput: ${num}`)
  // loop through 2 to sqrt(num). Can do floor(sqrt(num), as that is going to be closest number to sqrt(n) without going over it and repeating yourself
  // need to consider negative numbers. Let's use absolute value of num
  if (num < 2) {
    // negative numbers, 0, and 1 are all not prime
    console.log(`Composite`)
    return false
  }
  // sqrtN just equals the limit of i to test. But the actual test should still be if i goes into num, not if i goes into sqrtN.
  let sqrtN = Math.floor(Math.sqrt(num))
  console.log(`sqrtN: ${sqrtN}`)
  // if sqrtN % i === 0 is true, we found a composite 
  // if sqrtN % i === 0 is false, we continue. if it never equals true, we found a prime
  for (let i = 2; i <= sqrtN; i += 2) {
    console.log(`sqrtN % ${i} === 0? ${sqrtN % i === 0}`)
    // for performance, we want to stop the loop the second we find a divisor, aka sqrtN % i === 0, when i evenly goes into sqrtN without a remainder
    if (num % i === 0) {
      console.log(`Composite`)
      return false
    }
  }
  // if you loop through entire 2 < i < sqrtN and never find a prime, return true
  console.log(`Prime`)
  return true
}


// ==============
// Refactoring 1
// ==============

function isPrime(num) {
  let sqrtN = Math.floor(Math.sqrt(num))
  if (num < 2) return false
  for (let i = 2; i <= sqrtN; i++) {
    if (num % i === 0) return false
  }
  return true
}


// ==============
// Optimization 1
// ==============
// loop through 2 to sqrt(num). Can do floor(sqrt(num), as that is going to be closest number to sqrt(n) without going over it and repeating yourself
// additional optimization: never need to test for even numbers. 


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Basic", () => {

  it("Basic tests", () => {

    Test.assertEquals(isPrime(0), false, "0 is not prime");
    Test.assertEquals(isPrime(1), false, "1 is not prime");
    Test.assertEquals(isPrime(2), true, "2 is prime");
    Test.assertEquals(isPrime(73), true, "73 is prime");
    Test.assertEquals(isPrime(75), false, "75 is not prime");
    Test.assertEquals(isPrime(-1), false, "-1 is not prime");

  });

  it("Test prime", () => {

    Test.assertEquals(isPrime(3), true, "3 is prime");
    Test.assertEquals(isPrime(5), true, "5 is prime");
    Test.assertEquals(isPrime(7), true, "7 is prime");
    Test.assertEquals(isPrime(41), true, "41 is prime");
    Test.assertEquals(isPrime(5099), true, "5099 is prime");

  });

  it("Test not prime", () => {

    Test.assertEquals(isPrime(4), false, "4 is not prime");
    Test.assertEquals(isPrime(6), false, "6 is not prime");
    Test.assertEquals(isPrime(8), false, "8 is not prime");
    Test.assertEquals(isPrime(9), false, "9 is not prime");
    Test.assertEquals(isPrime(45), false, "45 is not prime");
    Test.assertEquals(isPrime(-5), false, "-5 is not prime");
    Test.assertEquals(isPrime(-8), false, "-8 is not prime");
    Test.assertEquals(isPrime(-41), false, "-41 is not prime");

  });
});