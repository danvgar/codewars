// https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript
// First Attempt - May 3, 2024

// =============
// Problem
// =============

// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?

// class Guesser {
//   constructor(number, lives) {
//     this.number = number;
//     this.lives = lives;
//   }

//   guess(n) {
//     return false;
//   }
// }

// ==============
// Solution 1
// ==============

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if(!this.lives > 0) {
      throw new Error("Already dead")
    }
    if(this.number === n) {
      return true
    }
    this.lives--
    return false;
  }
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Guesser", () => {
  it("Correct guess should return true", () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    Test.expect(guesser.guess(10));
  });

  it("Wrong guess should return false", () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(1);
    Test.expect(!guesser.guess(1));
  });

  it("Lives ran out should throw", () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(1);
    guesser.guess(2);

    Test.expectError("Expect error already dead", () => {
      guesser.guess(10);
    });
  });
});
