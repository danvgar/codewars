// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript
// First Attempt - Oct 21, 2024


// =============
// Problem
// =============

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// export function createPhoneNumber(numbers: number[]): string {
//   return ""
// }

// ==============
// Attempt 1
// ==============

export function createPhoneNumber(numbers: number[]): string {
  const sliceAndJoin = (arr: number[], start: number, end?: number): string => arr.slice(start, end).join("");

  return `(${sliceAndJoin(numbers, 0, 3)}) ${sliceAndJoin(numbers, 3, 6)}-${sliceAndJoin(numbers, 6)}`
}

// ==============
// Tests
// ==============

import { assert } from "chai";
import { createPhoneNumber } from "./solution";

describe('Tests', () => {
  it('Should pass sample tests', () => {
    assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});