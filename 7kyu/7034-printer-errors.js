// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
// First Attempt - July 28, 2023


// =============
// Problem
// =============

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// function printerError(s) {
//   // your code
// }


// ==============
// Solution 1
// ==============

function printerError(s) {
  let regex = /[n-z]/g
  // console.log(s)
  let num
  regex.test(s) ? num = s.match(regex).length : num = 0
  // console.log(num)
  let den = s.length
  return `${num}/${den}`
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("printerError",function() {
  it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
  })})