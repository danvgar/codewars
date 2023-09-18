// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// First Attempt - Sept 17, 2023

// =============
// Problem
// =============

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
// }

// P: input will be two arrays. no other edgecases need to be tested
// R: output will be an array that represents the difference of array A minus array B. Any element that exists in b must be removed from a. 
// E: 
// [1,2,2,2,3], [2] -> [1,3]
// [1,2], [1] -> [2]
// P: map through arrA. if arrB includes element in arrA, splice(index, 1). return arrA


// ==============
// Solution 1
// ==============

function arrayDiff(a, b) {

  function spliceArr(a) {
    a.map((element, index) => {
      if (b.includes(element)) {
        a.splice(index, 1)
        spliceArr(a)
      }
    })
    return a
  }

  spliceArr(a)
  return a

}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]")
  });
});
