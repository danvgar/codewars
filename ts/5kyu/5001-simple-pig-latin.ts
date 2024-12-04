// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
// First Attempt - Dec 1, 2024


// =============
// Problem
// =============

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// export const pigIt = (a : string) : string =>  {
//   // code away
// }

// ==============
// Attempt 1
// ==============

export const pigIt = (a: string): string => {

  console.log("Input Sentence: ", a);
  const PUNC: string = "'`,./;'[]\!@#$%^&*()_+{}|:<>?";
  let sentence: string[] = a.split(" ");


  for (let i = 0; i < sentence.length; i++) {
    // sentence is an array of words, separated by spaces
    let currentWord: string = sentence[i];

    sentence[i] = currentWord.substring(1) + currentWord[0] + "ay";
  }
  console.log("Final Sentence: ", sentence.join(" "));
  return sentence.join(" ");
}

// need to revisit

// ==============
// Tests
// ==============

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { pigIt } from "./solution";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  });
});
