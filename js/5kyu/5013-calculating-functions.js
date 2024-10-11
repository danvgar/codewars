// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// First Attempt - Oct 11, 2024

// =============
// Problem
// =============

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// - There must be a function for each number from 0 ("zero") to 9 ("nine")
// - There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// - Each calculation consist of exactly one operation and two numbers
// - The most outer function represents the left operand, the most inner function represents the right operand
// - Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

// function plus() {}
// function minus() {}
// function times() {}
// function dividedBy() {}

// ==============
// Solution 1
// ==============

function zero(func) {
  if (func) {
    return func(0)
  } else {
    return 0
  }
}
function one(func) {
    if (func) {
    return func(1)
  } else {
    return 1
  }
}
function two(func) {
    if (func) {
    return func(2)
  } else {
    return 2
  }
}
function three(func) {
    if (func) {
    return func(3)
  } else {
    return 3
  }
}
function four(func) {
    if (func) {
    return func(4)
  } else {
    return 4
  }
}
function five(func) {
    if (func) {
    return func(5)
  } else {
    return 5
  }
}
function six(func) {
    if (func) {
    return func(6)
  } else {
    return 6
  }
}
function seven(func) {
    if (func) {
    return func(7)
  } else {
    return 7
  }
}
function eight(func) {
    if (func) {
    return func(8)
  } else {
    return 8
  }
}
function nine(func) {
    if (func) {
    return func(9)
  } else {
    return 9
  }
}

function plus(func1) {
  return function(func2) {
    return func2 + func1
  }
}

function minus(func1) {
  return function(func2) {
    return func2 - func1
  }
}

function times(func1) {
  return function(func2) {
    return func2 * func1
  }
}

function dividedBy(func1) {
  return function(func2) {
    return Math.floor(func2 / func1)
  }
}


// ==============
// Tests
// ==============

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(productFib(4895), [55, 89, true]);
    assert.sameOrderedMembers(productFib(5895), [89, 144, false]);
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true]);
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false]);
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true]);
    assert.sameOrderedMembers(productFib(447577), [610, 987, false]);
    assert.sameOrderedMembers(productFib(602070), [610, 987, true]);
  });
});
