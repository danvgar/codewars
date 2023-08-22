// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// First Attempt - Aug 21, 2023


// =============
// Problem
// =============

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n) {
//   // Happy Coding ^_^
// }

// P: input will be a positive integer greater than or equal to 0 
// R: output will follow the pattern of the given series, returned as the sum rounded to the nearest two decimal places and returned as a string.
// E: 
// 0 --> "0.00"
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// P: 1/(3n+1)
// for loop: 
// if n === 0, return 0 rounded to two decimals.
// if n === 1, return 1 "" "" "" ""
// if n === 2, return 1 + 1/(n + 2) "" "" "" ""
// if n === 3, return 1 + 1/(n + 2) "" "" "" ""


// ==============
// Solution 1
// ==============

function SeriesSum(n) {
  switch (n) {
    case 0:
      return "0.00"
    case 1:
      return "1.00"
    default:
      let sum = 1
      for (let i = 1; i < n; i++) {
        sum += (1 / (3 * i + 1))
      }
      return sum.toFixed(2)
  }
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(SeriesSum(1), "1.00")
    Test.assertEquals(SeriesSum(2), "1.25")
    Test.assertEquals(SeriesSum(3), "1.39")
    Test.assertEquals(SeriesSum(4), "1.49")
  });
});
