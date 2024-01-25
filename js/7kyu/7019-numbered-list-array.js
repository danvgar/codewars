// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// First Attempt - May 8, 2023


// =============
// Problem
// =============

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// var number=function(array){
//   //your awesome code here
// }

// P: input is an array of strings or an empty array
// R: result should be an array of strings or an empty array. the strings should be the same order as the input array, but with a numbered list appended to the beginning, followed by a colon and a space, followed by the original inputs. 
// E: ["a", "b", "b"] --> ["1: a", "2: b", "3: c"]
// P: loop through each array element and concatenate a string before each element, while also incrementing the starting number.


// ==============
// Solution 1
// ==============

var number=function(array){  
  for(let i = 0; i < array.length; i++) {
    array[i] = `${i + 1}: ${array[i]}`
  }

  return array
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
  });
});
