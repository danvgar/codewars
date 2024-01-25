// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// First Attempt - Aug 11, 2023


// =============
// Problem
// =============

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// function oddOrEven(array) {
//   //enter code here
// }

// P: input will be an array of integers, including positive, negative, or zeroes. No need for other edge cases. an empty array should output even.
// R: ouput will be the string "odd" or "even", determined by whether the sum of all integers in the array are odd or even. if the input is empty or zero, output should be "even"
// E: 
// [0] -> "even"
// [0, 1, 4] -> "odd"
// [0, -1, -5] -> "even"
// P: switch (array.reduce % 2) {
// case "0": 
// return "even"
// break
// // case "1":
// return "odd"
// break
// // default:
// return "even"
// }



// ==============
// Solution 1
// ==============

function oddOrEven(array) {
  let sum = array.reduce((acc, c) => acc + c, 0)
  console.log(`Array: ${array}`)
  console.log(`Sum: ${sum}`)
  console.log(`% 2: ${sum % 2}`)

  if (sum === 1) {
    return "odd"
  }

  switch (sum % 2) {
    case 1:
      return "odd"
    case -1:
      return "odd"
    default:
      return "even"
  }

}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  });

  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
  });

  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
  });

  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
  });

  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
});
