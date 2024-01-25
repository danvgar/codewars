// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// First Attempt - Oct 30, 2023


// =============
// Problem
// =============

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str){

// }


// ==============
// PREP
// ==============

// input will be a string with dash AND/OR underscore delimited words. no edge cases? (empty string, null, undefined, other types of delimination, etc)

// output will be that string in Pascal case, in which the first word will be Camel case (lowercase) unless it was originally provided in upper case. 

// questions: 
// will there be a case where the word is ever all uppercase? 
// if so, should it remain in all uppercase, or should it be converted to pascal case? 
// any other type of punctuation to pay attention to? 
// will there be words that are not delimited but should have been?
// am I able to use any online tools?
// can I ask for hints if I need them?
// when I am working on your team what type of standards does your team use? Do you prefer one-liners? ternary operators? prefer more comments over less?


// ==============
// Solution 1
// ==============

function toCamelCase(str) {
  console.log(`Input: ${str}`)

  // separate each word into an array, using .split("_"), .split("-")
  if (!str) {
    // if str is a falsy value, such as empty, NaN, null, etc
    console.log(`Output: ${str}`)

    return ""
  }
  // input could have BOTH underscore and dash. let's replace all of them with same character first (a space " ")
  str = str.replaceAll("_", " ").replaceAll("-", " ")
  // now we the same string delimited by one character

  // split string into an array
  str = str.split(" ")
  // change first letter of each word to uppercase except first word
  console.log(`After Split: ${str}`)

  for (let i = 1; i < str.length; i++) {
    // start at index 1 to skip first word
    // replace the second element and onward with the uppercase of the first letter of the word plus the remainder of the word
    str[i] = str[i][0].toUpperCase() + str[i].substring(1)

  }

  // join words back without delimiting
  str = str.join("")

  console.log(`Output: ${str}`)
  return str

  // if worried about other punctuation, and avoiding regular expressions, I would probably resort to using an 26 element array with the alphabet and remove any characters that are not in this array

}

// examples/tests
toCamelCase("") // ""
toCamelCase("Hello-World") // "HelloWorld"
toCamelCase("this_is_an_example") // "thisIsAnExample"


// ==============
// Refactoring 1
// ==============

function toCamelCase(str) {
  return !str ? "" : str
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .split(" ")
    .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.substring(1))
    .join("")
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
  });
});
