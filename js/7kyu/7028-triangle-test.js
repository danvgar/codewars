// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// First Attempt - July 18, 2023


// =============
// Problem
// =============

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c)
// {
//    return false;
// }

// P: input is three integers representing the three sides of a triangle as lengths. no edge cases to test
// R: output is a boolean true or false, based on whether the three sides create a valid triangle.
// E: 
// (1,2,2) -> true
// (7,2,2) -> false
// P: a triangle is valid only if the sum of the two smallest sides is greater than the largest side. 

// ==============
// Solution 1
// ==============

function isTriangle(a,b,c) {
  let numArray = [a,b,c].sort((a,b) => a - b)
  return numArray[0] + numArray[1] > numArray[2]
}

// #firsttry


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})