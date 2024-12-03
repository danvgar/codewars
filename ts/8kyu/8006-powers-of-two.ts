// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/typescript
// First Attempt - Dec 2, 2024


// =============
// Problem
// =============

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


// ==============
// Attempt 1
// ==============

export function powersOfTwo(n: number): number[] {
  let result: number[] = [];

  for(let i = 0; i <= n; i++) {
    result.push(2**i);
  };

  return result;
}

// ==============
// Tests
// ==============

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { powersOfTwo } from "./solution";

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});
