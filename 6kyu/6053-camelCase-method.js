// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// First Attempt - Dec 8, 2023


// =============
// Problem
// =============

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

// String.prototype.camelCase = function() {
//your code here
// }


// ==============
// PREP
// ==============

// input is going to be a string.

// edge-cases
// string only alphabetical characters and spaces
// any other punctuation? 
// any other inputs? null, undefined, numbers, empty string? 
// empty string should output an empty string

// output will be the same string in camelcase (spaces are removed, all characters are lowercase except first letter of each word, which will be uppercase)


// ==============
// Solution 1
// ==============

String.prototype.camelCase = function () {
  return this
    // split words (by spaces) into an array -> split(" ")
    .split(" ")
    // loop through each word -> map()
    // // for each word, use substrings to work on each part of string -> .toLowerCase(), .toUpperCase(), .substring()
    .map((word, i) => word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    // join array back into a string WITHOUT spaces -> .join("")
    .join("")
  // return string
}

console.log(String.camelCase("hello case", "HelloCase"))
console.log(String.camelCase("hellocase", "Hellocase"))
console.log(String.camelCase("aNOTHER hello case", "AnotherHelloCase"))
console.log(String.camelCase("", ""))


// ==============
// Tests
// ==============

const { assert } = require('chai');

it("Basic tests", () => {
  assert.strictEqual("test case".camelCase(), "TestCase");
  assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
  assert.strictEqual("say hello".camelCase(), "SayHello");
  assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
  assert.strictEqual("".camelCase(), "");
})