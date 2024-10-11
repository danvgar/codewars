// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
// First Attempt - Oct 9, 2024

// =============
// Problem
// =============

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// function solve(s) {
//   return 0;
// }

// ==============
// Attempt 1
// ==============

// __Input:
// string -> alphabetical, all lowercase, no spaces

// __Edge-cases:
// 

// __Outputs:
// integer -> "numeric value" of only the consonants of the string

function solve(str) {
  // Create alphabet and vowel arrays
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
  const VOWELS = "aeiou".split("");
  
  // Create dictionary of letters and their values
  const valMap = new Map();
  ALPHABET.forEach( (letter, i) => valMap.set(letter, i+1));

  // Create filtered string
  // let filteredStr = str.split("").filter( (char) => !VOWELS.includes(char))
  let filteredStr = [str]
  for(const vowel of VOWELS) {
    filteredStr = filteredStr.map(substr => substr.split(vowel))
  }
  console.log("Filtered String: ", filteredStr)

  // Replace each letter of filtered string with it's value from the map
  let consonantVals = filteredStr.map( (letter, i, arr) => arr[i] = valMap.get(letter))
  console.log("Consonant Values: ", consonantVals)


  // Sum up val array
  let sum = consonantVals.reduce( (acc,c) => acc + c, 0)
  console.log("Sum: ", sum)
  
  return sum
}

// Misunderstood requirements. Highest value substring means we need to split the string by vowels, such that consecutive consonants are their own substring. 
// Revisit


// __Tests:
console.log(solve("zodiac"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function () {
  it("Should pass sample tests", function () {
    assert.strictEqual(solve("zodiac"), 26);
    assert.strictEqual(solve("chruschtschov"), 80);
    assert.strictEqual(solve("khrushchev"), 38);
    assert.strictEqual(solve("strength"), 57);
    assert.strictEqual(solve("catchphrase"), 73);
    assert.strictEqual(solve("twelfthstreet"), 103);
    assert.strictEqual(solve("mischtschenkoana"), 80);
    assert.strictEqual(solve("az"), 26);
  });
});
