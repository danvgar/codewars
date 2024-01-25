// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
// First Attempt - Dec 6, 2023


// =============
// Problem
// =============

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1

// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Courtesy of rosettacode.org

// function solution (roman) {
//   // complete the solution by transforming the 
//   // string roman numeral into an integer
// 	return 0;
// }


// ==============
// PREP
// ==============

// input will be a roman numeral string. input will always be a valid roman numeral string. 
// output will be the integer equivalent of the provided roman numeral string.

// questions
// genuinely no input edge cases to consider? no errors to throw? should I return anything if string is empty?
// is it acceptable to hardcode the roman numerals that are represented by ascending letters? (For example, IX = 9)?


// ==============
// Solution 1
// ==============

function solution(roman) {
  console.log(`\nInput: ${roman}`)
  let str = roman
  let num = 0

  // create Map object
  // Map object is like a regular object, but there's no default properties or methods, and most importantly it's iterable based on the insertion order. So we can loop through it from a specific order that works for us. 
  // hard code edge case roman numerals such as IV, IX, CD, etc. 
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
    ["I", 1],
  ])

  // search start of string for substrings from the Map object, and then as we find them, let's add them to our total and splice them out of our string.
  restartLoop: while (str.length > 0) {
    for (const [romanStr, romanNum] of romanMap) {
      if (str.startsWith(romanStr)) {
        num += romanNum
        str = str.substring(romanStr.length)
        continue restartLoop;
      }
    }
  }

  // once we get to the end of our string, return the total
  console.log(`Final Total: ${num}`)
  return num
}

console.log(solution("XXI"), 21)
console.log(solution("MM"), 2000)
console.log(solution("MDCLXVI"), 1666)


// ==============
// Solution 2
// ==============

function solution(roman) {
  console.log(`\nInput: ${roman}`)

  // create object key. no need to review odd cases of IX or IV, where letters are in ascending order
  const key = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  // split string into array
  let arr = roman.split("")
  console.log(`Start array: ${arr}`)
  // map across array, replacing each character with appropriate value in key

  arr = arr.map((char, i) => key[char])
  console.log(`Mapped Array: ${arr}`)

  let sum = arr.reduce((acc, c, i) => arr[i] < arr[i + 1] ? acc - c : acc + c, 0)
  console.log(`Sum: ${sum}`)


  // reduce array, but if arr[i + 1] > arr[i], turn arr[i] into a negative number
  // return final sum
  return sum
}


// ==============
// Refactored 2
// ==============

function solution(roman) {
  const key = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  return roman
    .split("")
    .map((char, i) => key[char])
    .reduce((acc, c, i, arr) => arr[i] < arr[i + 1] ? acc - c : acc + c, 0)
}

// ==============
// Tests
// ==============

const strictEqual = require('chai').assert.strictEqual;

function doTest(romanString, expected) {
  const actual = solution(romanString);
  strictEqual(actual, expected, `for roman number ${romanString}`);
}

describe("Tests", () => {
  it("sample tests", () => {
    doTest('XXI', 21);
    doTest('I', 1);
    doTest('IV', 4);
    doTest('MMVIII', 2008);
    doTest('MDCLXVI', 1666);
  });
});