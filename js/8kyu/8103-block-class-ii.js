// https://www.codewars.com/kata/55c0ac142326fdf18d0000af/solutions/javascript
// First Attempt - May 4, 2024

// =============
// Problem
// =============

// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

// // This Cube class needs help
// // Implement the constructor so that it can take an integer for the side or no args
// class Cube {

//   getSide() {
//     return this.side;
//   }
//   setSide(n) {
//     this.side = Math.abs(n);
//   }
// }

// ==============
// Solution 1
// ==============

class Cube {
  constructor(side) {
    this.side = Math.abs(side) || 0
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

// ==============
// Tests
// ==============

const expect = require("chai").expect;

describe("Cube", () => {
  it("constructs a cube with side s if positive s is passed", () => {
    let cube = new Cube(12);
    expect(cube.getSide()).to.equal(12);
    cube.setSide(42);
    expect(cube.getSide()).to.equal(42);
  });
});
