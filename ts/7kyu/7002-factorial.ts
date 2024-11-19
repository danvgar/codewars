// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/typescript
// First Attempt - Nov 18, 2024


// =============
// Problem
// =============

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// export function factorial(n: number) {
//   // your code here
// }


// ==============
// Attempt 1
// ==============

export function factorial(n: number) {

  let accumulator: number = 1;

  for (let i = 1; i <= n; i++) {
    accumulator *= i
  }

  return accumulator

}

// ==============
// Tests
// ==============

import { assert } from "chai";
import { factorial } from "./solution";

describe("Basic tests", () => {
  it("Testing for 0", () => assert.strictEqual(factorial(0), 1));
  it("Testing for 1", () => assert.strictEqual(factorial(1), 1));
  it("Testing for 4", () => assert.strictEqual(factorial(4), 24));
  it("Testing for 7", () => assert.strictEqual(factorial(7), 5040));
  it("Testing for 17", () => assert.strictEqual(factorial(17), 355687428096000));
});