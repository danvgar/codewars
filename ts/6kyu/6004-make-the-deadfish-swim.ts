// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
// First Attempt - Nov 30, 2024


// =============
// Problem
// =============

// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

/** return the output array and ignore all non-op characters */
// export function parse(data: string): number[] {

// }

// ==============
// Attempt 1
// ==============

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let fish: number = 0
  let ans: number[] = []

  for (let char of data) {
    switch (char) {
      case "i":
        fish++;
        break;
      case "d":
        fish--;
        break;
      case "s":
        fish **= 2;
        break;
      case "o":
        ans.push(fish);
        break;
    }
  }
  return ans;
}

// ==============
// Tests
// ==============

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { parse } from "./solution";

// TODO Add your tests here
describe("example", function () {
  it("test", function () {
    assert.deepEqual(parse("iiisdoso"), [8, 64]);
    assert.deepEqual(parse("iiisxxxdoso"), [8, 64]);
  });
});