// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
// First Attempt - Nov 20, 2023


// =============
// Problem
// =============

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// function longestConsec(strarr, k) {
//   // your code
// }


// ==============
// PREP
// ==============

// input will be two parameters, an array of strings, and an integer k.
// output will be the first concatenation of k consecutive strings that has the longest length of concatenation. 


// ==============
// Solution 1
// ==============

function longestConsec(strarr, k) {
  // if k is more than length of array, return ""
  // if k is less than 1, return "" 
  let longest = ""

  if (k > strarr.length || k < 1) return longest

  for (let i = 0; i <= strarr.length - k; i++) {
    let current = strarr.slice(i, i + k).join("");
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}
// loop through array from i to length of array divided by k
// slice array from i to i + k. 
// note slice takes in start index (inclusive) and end index (non-inclusive). slice(0,2) would return two elements, at index 0 and 1. 
// if concatenation length is longer than longest length, replace longest with concatenation
// return longest

// need to revisit


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("longestConsec", function () {
  it("Basic tests", function () {
    assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    assert.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    assert.strictEqual(longestConsec([], 3), "")
    assert.strictEqual(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    assert.strictEqual(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    assert.strictEqual(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    assert.strictEqual(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    assert.strictEqual(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
  })
})
