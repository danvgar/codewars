// https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
// First Attempt - May 2, 2024

// =============
// Problem
// =============

// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

// function Dog (breed) {
//   this.breed = breed;
// }

// var snoopy = new Dog("Beagle");

// snoopy.bark = function() {
//   return "Woof";
// };

// var scoobydoo = new Dog("Great Dane");

// ==============
// Solution 1
// ==============

function Dog(breed) {
  this.breed = breed;
  this.bark = function () {
    return "Woof";
  };
}

var snoopy = new Dog("Beagle");

var scoobydoo = new Dog("Great Dane");

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.expect(snoopy.bark() === "Woof");
    Test.expect(scoobydoo.bark() === "Woof");
  });
});
