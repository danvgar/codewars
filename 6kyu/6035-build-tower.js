// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// First Attempt - Nov 12, 2023


// =============
// Problem
// =============

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// function towerBuilder(nFloors) {
//   // build here
// }


// ==============
// PREP
// ==============

// input will be a positive integer representing the number of floors in the "tower" array, in other words the number of strings in the array. no need to consider any other edge cases such as 0, negative numbers, numbers as strings, other data types, etc.

// output will be an array of strings, with each string a combination of spaces and asterisks. 
// the asterisks will be centered with an equivalent number of space padding at the start and end of each string. each string in the array will be the same length. 
// to create the tower, each successive string should have an additional two asterisks than the original. 
// the final string should always be nothing but asterisks with no padding


// ==============
// Solution 1
// ==============

function towerBuilder(nFloors) {
  console.log(`\nInput: ${nFloors}`)
  // need to determine length of final string using math and nFloors
  // relationship between nFloors and max length appears to be 2n-1
  let maxlength = 2 * nFloors - 1
  console.log(`maxlength: ${maxlength}`)

  let arr = []

  // let spaces represent the number of asterisks removed, aka i is the total number of spaces in the string
  for (let spaces = 0; spaces < nFloors * 2; spaces += 2) {
    console.log(`Current Index: ${spaces}`)

    // final string would be "*".repeat(maxlength - i), i = 0
    // next string would be "*".repeat(maxlength - i), i = 2
    let str = "*".repeat(maxlength - spaces)
    console.log(`str = "*".repeat(maxlength - i): ${str}`)

    // padStart and padEnd take two parameters, the target length and the string to pad with, which already defaults to spaces
    // target length for the first padding will be the maxlength - i/2
    str = str.padStart(maxlength - spaces / 2)
    // target length for the second padding will just be the maxlength
    str = str.padEnd(maxlength)

    // add each successive new string to the start of the array. alternatively, push and then reverse the array.
    arr.unshift(str)
  }

  // return arr
  return arr
}

console.log(towerBuilder(3), `Expected: ["  *  ", " *** ", "*****"]`)

// ==============
// Refactoring 1
// ==============

function towerBuilder(nFloors) {
  let maxlength = 2 * nFloors - 1
  let arr = []
  for (let spaces = 0; spaces < nFloors * 2; spaces += 2) {
    arr.unshift("*".repeat(maxlength - spaces).padStart(maxlength - spaces / 2).padEnd(maxlength))
  }
  return arr
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(towerBuilder(1), ["*"]);
    Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
    Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
  });
});
