// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// First Attempt - May 15, 2023


// =============
// Problem
// =============

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//     // Add code here
// }

// P: input is two string arguments, "name" and "owner"
// R: output is a single string with the words "Hello guest" unless name === owner, then output is "Hello boss"
// E: if name !== owner, "Hello guest". if name === owner, "Hello boss"
// P: if name === owner, return Hello owner, else return Hello guest


// ==============
// Solution 1
// ==============

function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
}

// #firsttry


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
        Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
    });
});
