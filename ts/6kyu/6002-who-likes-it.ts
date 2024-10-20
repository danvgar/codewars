// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript
// First Attempt - Oct 20, 2024


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

// export const likes = (a : string[]) : string => {
//   // TODO
// }

// ==============
// Attempt 1
// ==============

// __Inputs:
// a: string[] -> array of names of people who liked an item

// __Outputs:
// string -> string representing the people who liked a post.
//  - if input is length 0, should return "no one likes this"
//  - if input is length 1, should return "${a[0]} likes this" 
//  - if input is length 2, should return "${a[0]} and ${a[1]} like this" 
//  - if input is length 3, should return "${a[0]}, ${a[1]}, and ${a[2]} like this" 
//  - if input is greater than length 3, should return "${a[0]}, ${a[1]}, and ${a.length - 2} others like this" 


export const likes = (a: string[]): string => {
  const length: number = a.length;
  switch (length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${a[0]} likes this`;
    case 2:
      return `${a[0]} and ${a[1]} like this`;
    case 3:
      return `${a[0]}, ${a[1]}, and ${a[2]} like this`;
    default: // cases greater than 3
      return `${a[0]}, ${a[1]}, and ${length - 2} others like this`;
  }
}

// ==============
// Tests
// ==============

import { assert } from "chai";

import { likes } from "./solution";

describe('static tests', function () {
  it('should return correct text', function () {
    assert.equal(likes([]), 'no one likes this');
    assert.equal(likes(['Peter']), 'Peter likes this');
    assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
