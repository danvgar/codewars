// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
// First Attempt - Oct 7, 2024

// =============
// Problem
// =============

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

// function lowercaseCount(str){
//   //How many?
// }

// ==============
// Solution 1
// ==============

function lowercaseCount(str) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");

  let filteredStr = str.split("").filter((char) => lowercase.includes(char)).join("");

  const lowercaseCount = filteredStr.length;

  return lowercaseCount;
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(lowercaseCount("abc"), 3);
    Test.assertEquals(lowercaseCount("abcABC123"), 3);
    Test.assertEquals(
      lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"),
      3
    );
    Test.assertEquals(lowercaseCount(""), 0);
    Test.assertEquals(
      lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"),
      0
    );
    Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
  });
});
