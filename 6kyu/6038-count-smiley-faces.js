// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
// First Attempt - Nov 15, 2023


// =============
// Problem
// =============

// Given an array(arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes.Eyes can be marked as : or;
// A smiley face can have a nose but it does not have to.Valid characters for a nose are - or ~
//   Every smiling face must have a smiling mouth that should be marked with either) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) : D; -D : ~)
// Invalid smiley faces: ; ( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input(input will always be an array).Order of the face(eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
// function countSmileys(arr) {
//   return 0;
// }


// ==============
// PREP
// ==============

// input will be an array of strings, with each string representing a (potential) smiling faces. input may also be an empty array.
// will each face ever have more than 3 characters?

// output will be an integer representing the number of "smiling faces". 
// a smiling face must start with a : or ;
// a smiling face MAY have a - or ~ in the middle
// a smiling face must end with a ) or a D
// all other characters are invalid 
// empty array should return zero


// ==============
// Solution 1
// ==============

function countSmileys(arr) {
  // consider switch cases? lots of conditionals need to be met
  // my first thought is array that we want to reduce the based on a conditional. (filter)
  // filter any faces longer than 3 characters
  arr = arr.filter(face => face.length <= 3)
  // filter array for any emote that start with colon or semi-colon.
  arr = arr.filter(face => face[0] === ":" || face[0] === ";")
  // filter array for any emote that end with closed parenthesis or capital D
  // consider that face sizes can vary from 2 to 3 characters
  arr = arr.filter(face => face[face.length - 1] === ")" || face[face.length - 1] === "D")
  // filter requires a callback with a boolean return, and it will keep any element when it returns true.
  // if string is 2 char long, at this point we know it's valid and we want to skip over it. (return true)
  // if string is 3 char long, we want to check if middle char face[1] is true for either valid scenario.  
  arr = arr.filter(face => face.length === 3 ? (face[1] === "-" || face[1] === "~") : true)

  // return array length
  return arr.length
  // array.length should return 0 if array is empty. 
}

// first tryyyyy

// ==============
// Refactoring 1
// ==============

function countSmileys(arr) {
  return arr
    .filter(face => face.length <= 3)
    .filter(face => face[0] === ":" || face[0] === ";")
    .filter(face => face[face.length - 1] === ")" || face[face.length - 1] === "D")
    .filter(face => face.length === 3 ? (face[1] === "-" || face[1] === "~") : true)
    .length
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Basic testing", function () {
  it("Example tests", () => {
    assert.strictEqual(countSmileys([]), 0);
    assert.strictEqual(countSmileys([':D', ':~)', ';~D', ':)']), 4);
    assert.strictEqual(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
    assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});