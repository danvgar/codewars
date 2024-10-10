// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
// First Attempt - Oct 10, 2024

// =============
// Problem
// =============

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// function capitalize(s) {
//   return [];
// }

// ==============
// Solution 1
// ==============

// __Inputs:
// string -> string in all lowercase

// __Outputs:
// string -> same string but with even indices capitalized

// __Edge-Cases:
// Will input string ever contain capital characters, symbols, or other non lowercase alphabetical characters?

function capitalize(str) {
  const even = str.split("").map( (char, i, arr) => i % 2 === 0 ? char.toUpperCase() : char).join("")
  const odd = str.split("").map( (char, i, arr) => i % 2 === 1 ? char.toUpperCase() : char).join("")
  return [even, odd]
}

// ==============
// Tests
// ==============

describe("Basic tests", function () {
  Test.assertDeepEquals(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
  Test.assertDeepEquals(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
  Test.assertDeepEquals(capitalize("abracadabra"), [
    "AbRaCaDaBrA",
    "aBrAcAdAbRa",
  ]);
  Test.assertDeepEquals(capitalize("codewarriors"), [
    "CoDeWaRrIoRs",
    "cOdEwArRiOrS",
  ]);
});
