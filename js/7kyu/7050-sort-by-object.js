// https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript
// First Attempt - Nov 30, 2023


// =============
// Problem
// =============

// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

// Example

// When sorted by "a", this:
// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]

// should return:
// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]

// The values will always be numbers, and the properties will always exist.


// ==============
// PREP
// ==============

// input will be two parameters, sortBy which is property name that we want to sort by, and list which is an object array
// object's will always have the property given by the argument and the values will always be integers.

// output will be the same array, sorted by the values of that property in descending order


// ==============
// Solution 1
// ==============

function sortList(sortBy, list) {
  // list is our array
  // sortBy is the name of the property we want to sort the array by
  // list[i] is the object at index i.
  // list[i][sortBy] is the value of the property sortBy of the object list[i]
  // the (a, b) parameters of .sort() represent two elements of the array, in other words list[i]
  return list.sort((a, b) => b[sortBy] - a[sortBy])
  // we want the values in descending order, so b - a
}


// ==============
// Tests
// ==============

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("should test for something", function () {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
