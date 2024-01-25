// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// First Attempt - Nov 14, 2023


// =============
// Problem
// =============

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// function high(x){

// }


// ==============
// PREP
// ==============

// input will be a lowercase string with space delimited words. no other edge cases need to be considered
// output will be the word with the "highest score", with each letter's score represented by its place in the alphabet, for example, a = 1, b = 2, z = 26. 


// ==============
// Solution 1
// ==============

function high(x) {
  console.log(`\nInput: ${x}`)
  // mvp version: create alphabet array, use indices + 1 as letter score
  const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"]

  // split input into array of words. save this array for reference later
  let words = x.split(" ")
  console.log(`words array: ${words}`)
  let scores = Array.from(words)
  console.log(`scores array: ${scores}`)
  // loop through each word in array
  for (let i = 0; i < scores.length; i++) {
    // for each word in array, convert word into an array of integers based on index of that character in alphabet array
    scores[i] = scores[i].split("").map(char => ALPHABET.indexOf(char) + 1).reduce((acc, c) => acc + c, 0)
    console.log(`scores array after loop at index ${i}: ${scores}`)
    console.log(`words array after loop at index ${i}: ${words}`)


  }
  console.log(`final words array: ${words}`)
  console.log(`final scores array: ${scores}`)


  let maxscore = Math.max(...scores)
  console.log(`maxscore: ${maxscore}`)

  let indexofmax = scores.indexOf(maxscore)
  console.log(`indexofmax: ${indexofmax}`)

  let topword = words[indexofmax]
  console.log(`topword: ${topword}`)

  // find index of max value in scores array and use this to retrive word in words array at that index
  // 
  return topword

}


// ==============
// Refactoring 1
// ==============

function high(x) {
  const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"]

  let words = x.split(" ")
  let scores = Array.from(words)

  for (let i = 0; i < scores.length; i++) {
    scores[i] = scores[i].split("").map(char => ALPHABET.indexOf(char) + 1).reduce((acc, c) => acc + c, 0)
  }

  let maxscore = Math.max(...scores)

  let indexofmax = scores.indexOf(maxscore)
  let topword = words[indexofmax]

  return topword
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
    assert.strictEqual(high('take me to semynak'), 'semynak');
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});