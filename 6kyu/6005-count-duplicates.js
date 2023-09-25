// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// First Attempt - Apr 23, 2023
// Second Attempt - Sept 22, 2023


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

function duplicateCount(text) {
    // console.log(`\nInput: ${text}`)
    text = text.toLowerCase().split("")
    let duplicates = 0
    let tempText = ""
    for (let i = 0; i < text.length; i++) {
        // console.log(`Current Test: ${text[i]} of ${text}`)
        tempText = text.filter(char => char === text[i])
        if (tempText.length > 1) {
            // console.log(` - Qty of ${tempText[0]} in text: ${tempText.length}`)
            text = text.filter(char => char !== tempText[0])
            // console.log(`Filtered tempText: ${tempText}`)
            duplicates++
            // console.log(` - Current Duplicates Count: ${duplicates}`)
            i = 0
        }
    }
    // console.log(`Output: ${duplicates}`)
    return duplicates
}



// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(duplicateCount(""), 0);
        assert.strictEqual(duplicateCount("abcde"), 0);
        assert.strictEqual(duplicateCount("aabbcde"), 2);
        assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
        assert.strictEqual(duplicateCount("Indivisibility"), 1)
        assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    });
});
