// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// First Attempt - Nov 3, 2023


// =============
// Problem
// =============

// Your task is to sort a given string.Each word in the string will contain a single number.This number is the position the word should have in the result.

//   Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

// If the input string is empty, return an empty string.The words in the input String will only contain valid consecutive numbers.

//   Examples
// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

// function order(words) {
//   // ...
// }


// ==============
// PREP
// ==============

// input will be a string of space-delimited words, and each word will have an integer between 1 and 9. input could be empty.
// output will be a space-delimited string, with the same words sorted based on the integer in each string. an empty string should return empty


// ==============
// Solution 1
// ==============

function order(words) {
  console.log(`Input: ${words}`)
  if (!words.length) {
    // empty string returns empty string
    return ""
  }

  function isolateNum(str) {
    // helper function for sort
    // sort( (a,b) =>
    // if a-b is positive, a is before b
    // if a-b is negative, b is before a
    // if a-b is zero, nothing changes

    // filter out only numbers from each word

    // ensure it is a number
    return Number(str.split("").sort().at(0))
  }


  return words
    // split string by spaces -> .split(" ")
    .split(" ")

    // sort through array, based on integer value. 
    .sort((a, b) => isolateNum(a) - isolateNum(b))

    // join array with spaces -> .join(" ")
    .join(" ")

}

console.log(order("is2 Thi1s T4est 3a"), `Expected: "Thi1s is2 3a T4est`)
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"), `Expected: "Fo1r the2 g3ood 4of th5e pe6ople"`)


  // ==============
  // Tests
  // ==============

  const { assert } = require('chai');

  describe("order", () => {
    it("should work corectly", () => {
      assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
      assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
      assert.strictEqual(order(""), "", "empty input should return empty string")
    });
  });