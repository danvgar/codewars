// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/typescript
// First Attempt - Oct 16, 2024


// =============
// Problem
// =============

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// export function position(alphabet:string):string {
//   return "";
// }

// ==============
// Attempt 1
// ==============

export function position(char: string): string {
  const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz"
  const position: number = ALPHABET.indexOf(char) + 1;
  return `Position of alphabet: ${position}`
}

// ==============
// Tests
// ==============

import { position } from './solution';

import { assert } from "chai";

describe("solution", function () {
  it("Basic tests", function () {
    assert.strictEqual(position("a"), "Position of alphabet: 1");
    assert.strictEqual(position("z"), "Position of alphabet: 26");
    assert.strictEqual(position("e"), "Position of alphabet: 5");
  });
});