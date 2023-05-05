// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// First Attempt - May 4, 2023


// =============
// Problem
// =============

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder = function(iterable){
//     //your code here - remember iterable can be a string or an array
// }


// ==============
// Solution 1
// ==============

var uniqueInOrder = function(iterable){
    console.log(iterable)
    if(typeof iterable === `string`) iterable = iterable.split("")
    console.log(iterable)
    for(let i = 0; i < iterable.length; i++) {
        console.log(`\n Current Array: ${iterable}`)
        console.log(`${iterable[i]} at ${i} -vs- ${iterable[i + 1]} at ${i + 1} `)
        console.log(`Does ${iterable[i]} = ${iterable[i + 1]}?: ${iterable[i] === iterable[i + 1]}`)
        if(iterable[i] === iterable[i + 1]){
            iterable.splice(iterable[i + 1],1)
            i = 0
            console.log(`Remove ${iterable[i+1]} at ${i + 1}`)
            console.log(`New Array: ${iterable}`)
        }
    }
    return iterable.join("")
}

// need to revisit


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
    });
});

