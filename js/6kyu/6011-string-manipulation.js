// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// First Attempt - July 18, 2023


// =============
// Problem
// =============

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//   // TODO
// }

// P: input will be an array of string "names", each name at a separate index
// R: output will be conditional on the number of names in the list. For zero names, the output should be "no one likes this". For one name, the output should be "Name0 likes this" with Name0 being the first name. For two names, the two names will be separate by an "and". For three names, the first two names are separated by a ", " and the last two names are separated by an " and ". For more than three names, the first two names are separated by a comma and the remaining names are listed as an integer of names left. 
// E:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// // P:
// switch case based on length of Array. Use template literals
// length = 0, "no one likes this"
// length = 1, "Name0 likes this"
// length = 2, "Name0 and Name1 like this"
// length = 3, "Name0, Name1, and Name2 like this."
// length > 3, "Name0, Name1, and ${length - 2} like this."

// ==============
// Solution 1
// ==============

function likes(names) {
  // switch case based on length of Array. Use template literals
  let output = ""
  switch (true) {
    // length = 0, "no one likes this"
    case names.length === 0:
      output = "no one likes this"
      break;
    // length = 1, "Name0 likes this"
    case names.length === 1:
      output = `${names[0]} likes this`
      break;
    // length = 2, "Name0 and Name1 like this"
    case names.length === 2:
      output = `${names[0]} and ${names[1]} like this`
      break;
    // length = 3, "Name0, Name1, and Name2 like this."
    case names.length === 3:
      output = `${names[0]}, ${names[1]} and ${names[2]} like this`
      break;
    // length > 3, "Name0, Name1, and ${length - 2} like this."
    case names.length > 3:
      output = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      break;
  }

  return output
}



// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('example tests', function () {
  it('should return correct text', function () {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});