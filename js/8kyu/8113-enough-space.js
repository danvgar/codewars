// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
// First Attempt - August 3, 2024

// =============
// Problem
// =============

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// function enough(cap, on, wait) {
//   // your code here
// }

// ==============
// Solution 1
// ==============

// Inputs: three parameters:
// bus capacity (excluding driver) as an integer
// number of people already on the bus (excluding driver) as an integer
// number of people waiting for the bus (excluding driver) as an integer

// Outputs: number of people waiting
// if enough space on the bus, return 0
// if not enough space on the bus, return passengers that cannot board

// Edge-cases:
// will inputs ever be anything other than integer? strings as integers?

function enough(cap, on, wait) {
  // if cap - on - wait > 0
  // return 0

  // else return Math.abs(cap - on - wait)
  return cap - on - wait > 0 ? 0 : Math.abs(cap - on - wait);
}

// Tests
// capacity of 10, 5 on bus, 5 waiting --> 0 waiting
console.log(enough(10, 5, 5), 0);

// capacity of 100, 60 on bus, 50 waiting --> 10 waiting
console.log(enough(100, 60, 50), 10);

// capacity of 20, 5 on bus, 5 waiting --> 0 waiting
console.log(enough(20, 5, 5), 0);

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
