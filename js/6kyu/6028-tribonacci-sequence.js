// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
// First Attempt - Nov 5, 2023


// =============
// Problem
// =============

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3(instead of 2) numbers of the sequence to generate the next.And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input(AKA signature), we have this sequence:

// [1, 1, 1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature ? As starting with [0, 1] instead of[1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array / list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non - negative number; if n == 0, then return an empty array(except in C return NULL) and be ready for anything else which is not clearly specified;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion:)]

// function tribonacci(signature, n) {
//   //your code here
// }


// ==============
// PREP
// ==============

// input will be two arguments, the first is a 3 element integer array that represents the start of the sequence, and the second is the number of elements we want in the final array, including the original three elements. if n === 0, return an empty array. how should we handle other edge case inputs?

// output will be the final tribonacci sequence of length n, inclusive of the first three digits from the signature. each digit starting from index 3 will be the sum of the previous 3 digits.

// for example, [0, 0, 1] should have the next digit of 1 since 0 + 0 + 1 === 1. Next number would be 2, since 0 + 1 + 1 === 2. 


// ==============
// Solution 1
// ==============

function tribonacci(signature, n) {
  // if n === 0, return empty array
  if (!n) {
    return []
  }
  if (n < 4) {
    return signature.slice(0, n)
  }
  // store signature into a new variable
  let arr = signature
  // loop through array until n. start at index 2
  // don't want to use reduce because it will loop through entire array, but we just want a portion of it. 
  for (let i = 2; i < n - 1; i++) {
    // arr.push(arr[i] + arr[i - 1] + arr[i-2])
    arr.push(arr[i] + arr[i - 1] + arr[i - 2])
  }
  // return arr
  return arr
}

console.log(tribonacci([0, 1, 1], 6), `Expecting: [0, 1, 1, 2, 4, 7]`)
console.log(tribonacci([0, 0, 0], 5), `Expecting: [0, 0, 0, 0, 0]`)
console.log(tribonacci([1, 1, 1], 0), `Expecting: []`)



// ==============
// Tests
// ==============

const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe("Basic tests", function () {

  function doTest(input, expected) {
    let [sig, len] = input;
    it(`Testing signature=[${sig}], n=${len}`, () => {
      assert.deepEqual(tribonacci(sig, len), expected);
    });
  }

  doTest([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
  doTest([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
  doTest([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
  doTest([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
  doTest([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  doTest([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
  doTest([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
  doTest([[1, 1, 1], 1], [1])

  doTest([[300, 200, 100], 0], [])
})