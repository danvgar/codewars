// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// First Attempt - Mar 6, 2023

// =============
// Problem
// =============

// Complete the solution so that it reverses the string passed into it.

// Example
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// function solution(str){

// }


// ==============
// Solution 1
// ==============

function solution(str){
  str = str.split("")
  str = str.reverse()
  str = str.join("")
  return str
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  