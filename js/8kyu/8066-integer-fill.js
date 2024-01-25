// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
// First Attempt - May 28, 2023


// =============
// Problem
// =============

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//   // your code here
// }

// P: input is two integers, the first being the first integer of the output array, and the second being the last integer of the output array. do not need to test for edge cases such as null, empty, or undefined 
// R: output should be an array with every integer between the two given integers
// E: between(1,4) -> [1,2,3,4]
// P: new array with argument a. iterate through i and push argument a+1 until arr[i] === argument b.


// ==============
// Solution 1
// ==============

function between(a, b) {
  let arr = [a]
  for(let i = 1; i < (b - a) + 1; i++) {
    arr.push(a + i)
  }
  return arr
}

// there's probably a smarter way to do this


// ==============
// Tests
// ==============

describe("Basic tests", () => {
  it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
  it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
});