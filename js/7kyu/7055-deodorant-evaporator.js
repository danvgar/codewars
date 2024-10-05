// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
// First Attempt - Oct 4, 2024

// =============
// Problem
// =============

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29

// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

// function evaporator(content, evap_per_day, threshold){
//   return -1;
// }

// ==============
// Solution 1
// ==============

// Inputs:
// content -> (integer) evaporator content in ml
// evap_per_day -> (integer) % of foam lost per day
// thershold -> (integer) % where evaporator is no longer useful
//
// percentages will be presented as whole integers. ex: 10% -> 10

// Output: returns how many days (integer) until the evaporator will be out of use

// Errors catching?

// Edge-Cases:
// numbers as strings? missing parameters? negative values? zero values?

function evaporator(content, evap_per_day, threshold) {
  // let days = 0
  let days = 0
  // let gas = 100 percent full
  let gas = 100
  // while (gas <= threshold) {
  while (gas >= threshold) {
    // each day, gas = gas - gas*(1 - evap_per_day/100)
    gas = gas * (1 - evap_per_day/100)
    days++
      // day++
    }
  // return days (integer)
  return days
}

console.log(evaporator(10, 10, 5), 29);
// evaporator has 10ml of gas. loses 10% every day. stops working once at 5%.
// Day 0 -> 10ml
// Day 1 -> 9ml (9/10 = 90%)
// Day 2 -> 8.1ml (8.1/10 = 81%)

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(evaporator(10, 10, 10), 22);
  });
});
