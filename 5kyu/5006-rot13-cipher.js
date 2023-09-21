// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// First Attempt - Sept 21, 2023


// =============
// Problem
// =============

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message){
// }

// ==============
// Solution 1
// ==============

function rot13(message) {
  // console.log(`\nInput: ${message}`)
  const lowerCaseABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const upperCaseABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let str = message.split("")
  let cipherIndex

  for (let i in str) {
    if (lowerCaseABC.includes(str[i])) {
      cipherIndex = lowerCaseABC.indexOf(str[i]) + 13
      if (cipherIndex >= 26) {
        cipherIndex -= 26
      }
      // console.log(`Cipher at ${i}: ${str[i]} -> ${lowerCaseABC[cipherIndex]} (Cipher Index: ${cipherIndex})`)
      str[i] = lowerCaseABC[cipherIndex]
    } else if (upperCaseABC.includes(str[i])) {
      cipherIndex = upperCaseABC.indexOf(str[i]) + 13
      if (cipherIndex >= 26) {
        cipherIndex -= 26
      }
      // console.log(`Cipher at ${i}: ${str[i]} -> ${upperCaseABC[cipherIndex]} (Cipher Index: ${cipherIndex})`)
      str[i] = upperCaseABC[cipherIndex]
    } else {
      // console.log(`Unchanged at ${i}: ${str[i]} -> ${str[i]}`)
    }
  }
  // console.log(`Output: ${str.join("")}`)
  return str.join("")
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;

describe("Tests", function () {
  it("Sample tests", function () {
    for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
    }
  });
});
