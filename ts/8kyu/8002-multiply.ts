// https://www.codewars.com/kata/50654ddff44f800200000004/train/typescript
// First Attempt - Oct 14, 2024


// =============
// Problem
// =============

// This code does not execute properly. Try to figure out why.

// export function multiply(a: number, b: number): number {
//     return a + b;
// }

// ==============
// Attempt 1
// ==============

export function multiply(a: number, b: number): number {
    return a * b;
}

// ==============
// Tests
// ==============

import { multiply } from './solution';
import { assert } from "chai";

describe("multiply", function() {
  it("should return the product", () => {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(1, 2), 2);
  });
});