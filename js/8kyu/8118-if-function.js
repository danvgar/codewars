// https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript
// First Attempt - Sept 29, 2024

// =============
// Problem
// =============

// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.

// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

// function _if(bool, func1, func2) {
//   // ...
// }

// ==============
// Solution 1
// ==============

function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}

// ==============
// Tests
// ==============

const { assert } = require("chai");

describe("Tests", () => {
  const unexpectedTrue = () =>
    assert.fail("'true' function unexpectedly called");
  const unexpectedFalse = () =>
    assert.fail("'false' function unexpectedly called");

  it("test true function", () => {
    let testvar = 0;
    _if(true, () => (testvar = 42), unexpectedFalse);
    assert.strictEqual(testvar, 42, "'true' function has not been called");
  });
  it("test false function", () => {
    let testvar = 0;
    _if(false, unexpectedTrue, () => (testvar = 42));
    assert.strictEqual(testvar, 42, "'false' function has not been called");
  });
});
