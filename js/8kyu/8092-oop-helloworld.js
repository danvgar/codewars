// https://www.codewars.com/kata/57036f007fd72e3b77000023/train/javascript
// First Attempt - Apr 23, 2024

// =============
// Problem
// =============

// You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:
// Solution.main("parameter1","parameter2");

// Hints:
//  Check your references
//  Think about the scope of your method
//  For prolog you can use write but there are better ways
//  If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.

// Print "Hello World!" to the screen
// class Solution{
// }

// ==============
// Solution 1
// ==============

// Print "Hello World!" to the screen
class Solution {
  static main() {
    console.log("Hello World!")
  }
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Solution.main("greetings from Javatlacati!");
    Test.expect(logRecord.indexOf("Hello World!") !== -1);
  });
});
