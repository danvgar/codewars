// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
// First Attempt - May 1, 2023


// =============
// Problem
// =============

// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

// function isPalindrome(x) {
//     // your code here
// }


// ==============
// Solution 1
// ==============

function isPalindrome(x) {
    x = x.toLowerCase()
    return x === x.split("").reverse().join("")
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Fixed tests", function() {
    it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
    it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
    it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
    it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
    it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
    it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
    it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
    it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});