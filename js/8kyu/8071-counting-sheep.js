// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// First Attempt - June 11, 2023


// =============
// Problem
// =============

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num){
//   //your code here
// }

// P: input will be a non-negative integer. no need for edge cases.
// R: output will be a single string, with an integer sequence from 1 to the given integer with the text " sheep..." between each integer.
// E: 3 -> "1 sheep...2 sheep...3 sheep..."
// P: string = num + " sheep...". 
// for i = 1, i <= num
// string += num + " sheep..."
// return string


// ==============
// Solution 1
// ==============

var countSheep = function (num){
  let string = ""
  for(let i = 1; i <= num; i++) {
    string += i + " sheep..."
  }
  return string
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});