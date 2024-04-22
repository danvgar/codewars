// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript
// First Attempt - Apr 22, 2024

// =============
// Problem
// =============

// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// class God{
//   /**
//    * @returns Human[]
//    */
//     static create(){
//       // code
//     }
//   }
//   // code

// ==============
// Solution 1
// ==============

class Human {}

class Man extends Human {}

class Woman extends Human {}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    // Creation method return object array of length 2.
    // First object is class Man
    // Second object is class Woman
    // Both Objects have subclass Human
    return [new Man(), new Woman()];
  }
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("GodTest", function () {
  it("Adam should be a Man", function () {
    let humans = God.create();
    Test.assertEquals(
      humans[0] instanceof Man,
      true,
      "Expected Adam to be a Man"
    );
  });
});
