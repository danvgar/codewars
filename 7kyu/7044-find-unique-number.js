// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
// First Attempt - Aug 31, 2023


// =============
// Problem
// =============

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {
//   return 0;
// }


// ==============
// Solution 1
// ==============

function stray(numbers) {
  numbers = numbers.sort( (a,b) => a-b)
  if(numbers[0] === numbers[1]) {
    return numbers[numbers.length - 1]
  } else {
    return numbers[0]
  }
}

// firsttryyyy


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;


describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([1, 2, 1]), 2);
    assert.strictEqual(stray([2, 1, 1]), 2);
  });
});
