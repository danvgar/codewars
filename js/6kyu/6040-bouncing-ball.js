// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
// First Attempt - Nov 17, 2023


// =============
// Problem
// =============

// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

// function bouncingBall(h,  bounce,  window) {
//   // your code here
// }


// ==============
// PREP
// ==============

// input will be three number parameters, h (h > 0), bounce (0 < bounce < 1), window (0 < window < h). 
// // h is the height the ball is dropped from
// // bounce is a decay parameter, representing the percentage of the original height that the new height will be. 
// // window is the height the ball is witnessed from, below h. 

// output will be the number of times the ball will pass the window on both fall and bounce. if any of the above conditions are not true, return -1.
// does ball need to be at window height to be seen? if window is at 1 and ball is at 1, is the ball seen? does it count as both a fall and a rise?

// ==============
// Solution 1
// ==============

function bouncingBall(h, bounce, window) {
  // return -1 if:
  if (h <= 0
    // // if h is less than zero
    || bounce <= 0
    // // if bounce is less than zero
    || bounce >= 1
    // // if bounce is greater than one
    || window >= h
    // // if window is greater than h
    || window <= 0
    // // if window is less than zero
  ) {
    return -1
  }

  let fall = 1
  let rise = 0

  while (h * bounce > window) {
    fall++
    rise++
    h = h * bounce
  }

  // let fall = 1 (ball will at minimum fall past the window once)
  // let rise = 0 
  // while (h * bounce > window), fall++, rise++ 

  // return sum of fall and rise
  return fall + rise
}


// ==============
// Tests
// ==============

const assert = require('chai').assert;

describe("Sample tests", () => {
  it('h = 3.0, bounce = 0.66, window = 1.5', () => {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
  });

  it('h = 30.0, bounce = 0.66, window = 1.5', () => {
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
  });

  it('h = 3.0, bounce = 1.0, window = 1.5', () => {
    assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
  });
});
