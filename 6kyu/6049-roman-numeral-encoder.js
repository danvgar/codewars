// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
// First Attempt - Dec 3, 2023
// Second Attempt - Dec 4, 2023


// =============
// Problem
// =============

// Create a function taking a positive integer between 1 and 3999(both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.In Roman numerals 1990 is rendered: 1000 = M, 900 = CM, 90 = XC; resulting in MCMXC. 2008 is written as 2000=MM, 8 = VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// function solution(number) {
//   // convert the number to a roman numeral
// }


// ==============
// PREP
// ==============

// input will be an integer from 1 to 3999 inclusive
// output will be a string with a valid roman numeral sequence representing that integer


// ==============
// Solution 1
// ==============

function solution(number) {
  // need to store roman numeral information somewhere. maybe as an object or map. 
  const convert = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ])

  const numLength = number.toString().length
  // largest power of 10 comes first.
  // I want to break down integer into an array that can be mapped to object key-value pairs. 
  // we can make a helper function to convert number into an array by powers of 10

  const powersOfTen = number => [...number.toString()].reverse().map((digit, i) => digit * 10 ** i).reverse().map(Number)
  // powersOfTen takes in a number and converts it into an array of separated digits raised to powers of 10, then ignores zeroes. elements returned as number values. For example, 2001 -> [2000, 1]

  // go through powersOfTen array. for each element, we want the minimum non-zero floor of the roman numeral that go into it. 
  // Ex: for 2000, 1000 goes into it 2 times. 500 goes into it 4 times. 100 goes into it 20 times. So we want the floor of element / 1000 which is 2. 
  // Ex: for 200, 1000 goes into it 0 times. 500 goes into it 0 times. 100 goes into it 2 times. We want to ignore zero and go for 2. 
  const convertToString = arr => {
    for (let i = 0; i < arr.length; i++) {

    }
  }
  // maybe don't get rid of zeroes yet because it's helpful to know how many digits were in original number 
  // if input length === 4, 

  // brute force version: lots of floors and modulus
  // arrays may be useful
  // return string

  // most efficient solution is to store the odd roman numerals into the object as well. Example, don't make an algo for IX: 9, just put it in the object for detection purposes. then iterate through object (as a Map) and subtract from original number. 
}

console.log(solution(1000), `Expected: "M"`) // M = 1000
console.log(solution(2000), `Expected: "MM"`) // M = 1000, M = 1000
console.log(solution(1990), `Expected: "MCMXC"`) // M = 1000, CM = 1000 - 100, XC = 100 - 10

// need to revisit


// ==============
// Solution 2
// ==============

function solution(number) {
  // create empty string
  let str = ""

  // store roman numerals as key-value pairs within a Map object, starting with largest first
  // include any edge-cases where roman numerals are not sorted in descending order to create an integer. eg, IX = 9, IV = 4
  const romanMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ])

  // create place in map? does map have an index? how do we do this
  // iterate through map. 
  for (const [romanStr, romanNum] of romanMap) {
    // // while input number is larger than value in map, subtract value from number, and concatenate string to final string. 
    // // maybe keep track of place in map, because if we already tested larger numbers, no need to test them again
    // // if input number is smaller than value in map, try the next value in map until you find one that is smaller.
    while (number >= romanNum) {
      number -= romanNum
      str += romanStr
    }
    // return string
  }
  return str
}

// ==============
// Tests
// ==============

const chai = require('chai');
const assert = chai.assert;

describe("solution", function () {
  it("should handle small numbers", function () {
    assert.strictEqual(solution(1), 'I', '1 should return "I"')
    assert.strictEqual(solution(2), 'II', '2 should return "II"')
    assert.strictEqual(solution(3), 'III', '3 should return "III"')
    assert.strictEqual(solution(4), 'IV', '4 should return "IV"')
    assert.strictEqual(solution(5), 'V', '5 should return "V"')
    assert.strictEqual(solution(9), 'IX', '9 should return "IX"')
    assert.strictEqual(solution(10), 'X', '10 should return "X"')
    assert.strictEqual(solution(11), 'XI', '11 should return "XI"')
    assert.strictEqual(solution(19), 'XIX', '19 should return "XIX"')
    assert.strictEqual(solution(22), 'XXII', '22 should return "XXII"')
    assert.strictEqual(solution(15), 'XV', '15 should return "XV"')
  });

  it("should handle large numbers", function () {
    assert.strictEqual(solution(1000), 'M', '1000 should, "M"')
    assert.strictEqual(solution(1001), 'MI', '1001 should, "MI"')
    assert.strictEqual(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
    assert.strictEqual(solution(2007), 'MMVII', '2007 should, "MMVII"')
    assert.strictEqual(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
  });
});