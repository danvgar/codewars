// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
// First Attempt - Sept 16, 2023


// =============
// Problem
// =============

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//   // ...
// }


// ==============
// Solution 1
// ==============

function plural(n) {
  return n !== 1
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(plural(0), true, "Plural for 0");
    Test.assertEquals(plural(0.5), true, "Plural for 0.5");
    Test.assertEquals(plural(1), false, "Plural for 1");
    Test.assertEquals(plural(100), true, "Plural for 100");
    Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

  });
});
