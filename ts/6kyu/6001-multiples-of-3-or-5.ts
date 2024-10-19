// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
// First Attempt - Oct 19, 2024


// =============
// Problem
// =============

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// export class Challenge {
//   static solution(number: number) {
//     return 0; //change this
//   }
// }

// ==============
// Attempt 1
// ==============

// __Inputs: 
// integer, representing the last number (non-inclusive) of the sequence to be studied

// __Edge-cases:
// If input is negative, return 0

// __Outputs:
// integer, sum of the factors of the number, if the factors include 3 or 5 

// __Approach 1:
// Brute Force:
// Iterate through sequence from 1 to number
// If currentVal % 3 === 0 or currentVal % 5 === 0, add currentVal to sum
// return sum

export class Challenge {
  static solution(number: number): number {
    if (number < 0) return 0
    let sum: number = 0
    for(let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
      }
    }
    return sum
  }
}

// ==============
// Tests
// ==============

import solution = require('./solution');
import {assert} from "chai";

function test(num: number, expected: number) {
  assert.strictEqual(solution.Challenge.solution(num), expected)
}

describe("solution", function(){
  it("should handle basic tests", function() {
    test(10, 23);
  });
});