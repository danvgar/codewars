// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// First Attempt - Apr 1, 2023


// =============
// Problem
// =============

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// function solution(number){

// }


// ==============
// Solution 1
// ==============

function solution(number){
    // input is integer 
    // function should only run for values below input
    // iterate through numbers below input (for loop with i++)
    // console.log(`Initial Number: ${number}`)
    let sum = 0
    for(let i = 1; i < number; i++) {
        // if multiple of 3 or 5, add to sum 
        // console.log(`Current Value: ${i}`)
        // console.log(`Multiply of 3?: ${i % 3 === 0}`)
        // console.log(`Multiply of 5?: ${i % 5 === 0}`)      
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i
            // console.log(`New Sum: ${sum}`)
            // console.log(`\n`)
        // } else {
            // console.log("Not a multiple of 3 or 5")
            // console.log(`\n`)
        }
    }
    return sum
    // return sum
}


// ==============
// Tests
// ==============

const { assert } = require("chai")

function test(n, expected) {
    it(`n=${n}`, () => {  
        let actual = solution(n)
        assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
    test(10,23)
})