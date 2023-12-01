// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// First Attempt - Nov 30, 2023


// =============
// Problem
// =============

// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Good luck and enjoy!

// function wave(str) {
//   // Code here
// }


// ==============
// PREP
// ==============

// input will be a string. string will be all lowercase or empty. no other edge cases.

// output will be a string array, and at each index of the array, print the string with the char at that index turned to uppercase
// empty string should return an empty array
// ignore white space, but print it none the less

// ==============
// Solution 1
// ==============

function wave(str) {
  console.log(`\nInput: ${str}`)
  // create an empty array, arr
  let arr = []

  // if str.length === 0, return arr
  if (str.length === 0) {
    console.log(`Output (Input is length zero): ${arr}`)
    return arr
  }

  // for each index of str
  for (let i = 0; i < str.length; i++) {
    console.log(`At index ${i}, char is ${str[i]}`)

    // // if char at index is " ", continue
    if (str[i] === " ") {
      console.log(`Char is a space. Continue.`)
      continue
    }
    // // else, push string to array with char at index uppercase.
    else {
      console.log(`Push string with ${str[i]} as uppercase.`)
      arr.push(str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1))
      console.log(`Current array: ${arr}.`)

    }
  }

  // return arr
  console.log(`Output (End of Program): ${arr}`)
  return arr
}

console.log(wave("o"), `Expected: ["o"]`)
console.log(wave("hello"), `Expected: ["Hello", "hEllo", "heLlo", "helLo", "hellO"]`)
console.log(wave("test case"), `Expected: ["Test case", "tEst case", "teSt case", "tesT case", "test Case", "test cAse", "test caSe", "test casE"]`)


// ==============
// Refactoring 1
// ==============

function wave(str) {
  let arr = [];

  if (str.length === 0) return arr;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    else arr.push(str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1));
  };
  return arr
};


// ==============
// Tests
// ==============

const chai = require('chai')
const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Testing...', function () {
  it("Basic tests", () => {
    let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    assert.deepEqual(wave("hello"), result, "Should return: '" + result + "'");

    result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
    assert.deepEqual(wave("codewars"), result, "Should return: '" + result + "'");

    result = [];
    assert.deepEqual(wave(""), result, "Should return: '" + result + "'");

    result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
    assert.deepEqual(wave("two words"), result, "Should return: '" + result + "'");

    result = [" Gap ", " gAp ", " gaP "];
    assert.deepEqual(wave(" gap "), result, "Should return: '" + result + "'");
  });
});
