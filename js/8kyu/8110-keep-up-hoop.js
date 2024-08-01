// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
// First Attempt - July 31, 2024

// =============
// Problem
// =============

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// function hoopCount(n) {
//   //your code goes here
// }

// ==============
// Solution 1
// ==============

// Inputs: number of times hoop goes around
// Outputs: String that is different based on input. If input is greater than or equal to 10, return "Great, now move on to tricks". Else, return "Keep at it until you get it"
// Edge-cases: Input will always be an integer greater than or equal to 0. Input will not be a number represented as a string. Input will not be null or NaN. No need for catching errors. 

function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

// Tests
console.log(hoopCount(0), "Keep at it until you get it")
console.log(hoopCount(3), "Keep at it until you get it")
console.log(hoopCount(11), "Great, now move on to tricks")

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(hoopCount(3), "Keep at it until you get it");
    Test.assertEquals(hoopCount(11), "Great, now move on to tricks");
  });
});
