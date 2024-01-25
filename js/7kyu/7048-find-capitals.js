// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
// First Attempt - Sept 25, 2023


// =============
// Problem
// =============

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// var capitals = function (word) {
// 	// Write your code here
// };


// ==============
// Solution 1
// ============ 

var capitals = function (word) {
  const capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let indexArr = []

  word = word.split("")
  for (let index in word) {
    if (capitals.includes(word[index])) {
      indexArr.push(Number(index))
    }
  }
  return indexArr
};


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
  });
});