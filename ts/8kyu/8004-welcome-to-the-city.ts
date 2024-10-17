// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/typescript
// First Attempt - Oct 17, 2024


// =============
// Problem
// =============

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// export const sayHello = (name: string[], city: string, state: string):string => {
//   return '';
// }

// ==============
// Attempt 1
// ==============

export const sayHello = (name: string[], city: string, state: string): string => {
  let fullName: string = name.join(" ");
  
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

// ==============
// Tests
// ==============

import { assert } from "chai";
import { sayHello } from "./solution";
import chai from "chai";

chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!');
    assert.strictEqual(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!');
    assert.strictEqual(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!');
  });
});