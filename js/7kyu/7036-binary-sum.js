// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
// First Attempt - Aug 8, 2023


// =============
// Problem
// =============

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = arr => {
//   // your code
// };


// ==============
// Solution 1
// ==============

const binaryArrayToNumber = arr => {
  // console.log(arr)
  let num = arr.join("")
  // console.log(num)
  // console.log(typeof num)
  // console.log(Number(num).toString(2))
  // console.log(`\n`)
  return parseInt(num,2)
};


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("One's and Zero's", () => {

  it("Example tests", () => {
    Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
    Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
    Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
    Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });

});