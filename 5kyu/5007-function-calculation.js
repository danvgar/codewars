// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// First Attempt - Sept 21, 2023


// =============
// Problem
// =============

// This time we want to write calculations using functions and get the results.Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0("zero") to 9("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division.For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// function zero() { }
// function one() { }
// function two() { }
// function three() { }
// function four() { }
// function five() { }
// function six() { }
// function seven() { }
// function eight() { }
// function nine() { }

// function plus() { }
// function minus() { }
// function times() { }
// function dividedBy() { }


// ==============
// Solution 1
// ==============

function zero(val = 0) {
  return val
}
function one(val = 1) {
  return val
}
function two(val = 2) {
  return val
}
function three() {
}
function four() { }
function five() { }
function six() { }
function seven() { }
function eight() { }
function nine() { }

function plus() { }
function minus(a) {
  return - a
}
function times(a, b = 1) {

}
function dividedBy() { }

console.log(two(minus(one())))


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times(five())), 35);
    assert.strictEqual(four(plus(nine())), 13);
    assert.strictEqual(eight(minus(three())), 5);
    assert.strictEqual(six(dividedBy(two())), 3);
  });
});
