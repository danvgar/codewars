// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
// First Attempt - June 3, 2023


// =============
// Problem
// =============

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// function stringToArray(string){

// 	// code code code

// }

// ==============
// Solution 1
// ==============

function stringToArray(string){
  return string.split(" ")
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
  });
});
