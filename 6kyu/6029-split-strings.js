// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// First Attempt - Nov 6, 2023


// =============
// Problem
// =============

// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//   Examples:

// * 'abc' => ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str){

// }


// ==============
// PREP
// ==============

// input will be a string. , if string is empty, return an empty array. no other edgecases needed

// ouput will be this string split into an array, with each element representing two characters in sequential order. If the string has an odd number length, the last element should be end-padded with an underscore


// ==============
// Solution 1
// ==============

function solution(str) {
  // can't think of a way to do this without storing a new array in memory
  let arr = []
  // if str length is zero, return arr
  if (!str.length) {
    return arr
  }
  // if str length is odd number (% 2 === 1), padEnd with "_" to (str.length + 1)
  if (str.length % 2 === 1) {
    str = str.padEnd(str.length + 1, "_")
  }

  // loop through string, grabbing two characters at a time and adding them to array
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.substring(i, i + 2))
  }

  // return arr
  return arr
}

console.log(solution("abc"), `Expected: ["ab","c_"]`)
console.log(solution("abcdef"), `Expected: ["ab", "cd", "ef"]`)
console.log(solution(""), `Expected: []`)


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});