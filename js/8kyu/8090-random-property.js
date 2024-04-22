// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
// First Attempt - Apr 21, 2024

// =============
// Problem
// =============

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// var Ghost = function() {
//   // your code goes here
// };

// ==============
// Solution 1
// ==============

var Ghost = function () {
  let colors = ["white", "yellow", "purple", "red"];
  let index = Math.floor(Math.random() * 4);
  this.color = colors[index];
};

// ==============
// Tests
// ==============

describe("Ghost", () => {
  it("should be one of the specified colors", () => {
    let colors = ["white", "yellow", "purple", "red"];
    Test.expect(colors.includes(new Ghost().color));
  });
});
