// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
// First Attempt - Nov 18, 2023


// =============
// Problem
// =============

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   // TODO
//   return {};
// }


// ==============
// PREP
// ==============

// input will be a string. no other data types or funny business to consider

// output will be an object, with each property-key representing a unique character and each property-value representing the number of occurences of that character.

// empty string should return empty object literal


// ==============
// Solution 1
// ==============

function count(string) {
  // if empty string, return empty object literal
  if (string.length === 0) {
    return {}
  }

  // create an empty object
  let charCount = {}

  // create an array of unique elements from that string  ->  uniques = Array.from(new Set(string)
  let uniques = Array.from(new Set(string))

  // loop through string, for length of unique array. 
  for (let i = 0; i < uniques.length; i++) {
    // get number of occurences of each char  ->  string.filter(char => char === uniques[i]).length
    // make new object property of char and assign it this value.   ->  obj[uniques[i]] = occurences
    charCount[uniques[i]] = [...string].filter(char => char === uniques[i]).length
  }
  
  // return object
  return charCount
}

console.log(count("abcd"), `Expected: {'a': 1, 'b': 1, 'c': 1, 'd': 1}`)
console.log(count("dddd"), `Expected: {'d': 4}`)
console.log(count("aba"), `Expected: {'a': 2, 'b': 1}`)

// first tryyyyy


// ==============
// Refactoring 1
// ==============

function count(string) {
  let charCount = {}

  if (!string) {
    return charCount
  }

  let uniques = Array.from(new Set(string))

  for (let i = 0; i < uniques.length; i++) {
    charCount[uniques[i]] = [...string].filter(char => char === uniques[i]).length
  }
  
  return charCount
}


// ==============
// Tests
// ==============

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample Tests', function () {
  function test(string, expected) {
    it(`<code>'${string}'</code>`, function () {
      assert.deepEqual(count(string), expected);
    });
  }

  test('', {});
  test('a', { 'a': 1 });
  test('ab', { 'a': 1, 'b': 1 });
  test('aba', { 'a': 2, 'b': 1 });
  test('ABC', { 'A': 1, 'B': 1, 'C': 1 });
});