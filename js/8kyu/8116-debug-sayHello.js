// https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
// First Attempt - September 25, 2024

// =============
// Problem
// =============

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

// function sayHello(name) {
//   return 'Hello'
// }

// ==============
// Solution 1
// ==============

function sayHello(name) {
  return `Hello, ${name}`
}

// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
    assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
    assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
    assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
  });
});
