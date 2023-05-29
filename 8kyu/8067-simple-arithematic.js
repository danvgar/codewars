// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript
// First Attempt - May 29, 2023


// =============
// Problem
// =============

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// function move (position, roll) {
//   // return the new position
// }

// P: input is two integers, the first being the "starting position" and the second being the "dice roll". no need to account for null, undefined, improper variable types, or other edge cases.
// R: ouput is a single integer, which should equal the "starting positoin" plus the "dice roll" times two. 
// E: (3, 6) -> 15
// P: return position + roll * 2


// ==============
// Solution 1
// ==============

function move (position, roll) {
  return position + roll * 2
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe('move function', () => {
  it('basic tests', () => {
    Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);
  })
})