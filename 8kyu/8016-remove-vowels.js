// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// First Attempt - Mar 16, 2023

// =============
// Problem
// =============

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     return str;
// }


// ==============
// Solution 1
// ==============

function disemvowel(str) {
    console.log(`Original String: ${str}`)

    str = str.split("")
    console.log(`Split String: ${str}`)

    // str = str.forEach( (a,i) => a === "a" || a === "e" || a === "i" || a === "o" || a === "u" ? str.splice(i,1) : a = a)
    str = str.filter(a => a !== "a" && a !== "e" && a !== "i" && a !== "o" && a !== "u")
    str = str.filter(a => a !== "A" && a !== "E" && a !== "I" && a !== "O" && a !== "U")
    console.log(`Filtered String: ${str}`)
    
    str = str.join("")
    console.log(`Joined String: ${str}`)

    return str;
}


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
        assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
        assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
})