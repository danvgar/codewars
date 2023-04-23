// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// First Attempt - Apr 23, 2023


// =============
// Problem
// =============

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text){
//     //...
// }


// ==============
// Solution 1
// ==============

function duplicateCount(text){
    
    console.log(new Set(text.toLowerCase()))
}

// need to revisit


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(duplicateCount(""), 0);
        assert.strictEqual(duplicateCount("abcde"), 0);
        assert.strictEqual(duplicateCount("aabbcde"), 2);
        assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
        assert.strictEqual(duplicateCount("Indivisibility"), 1)
        assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    });
});
