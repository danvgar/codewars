// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
// First Attempt - Oct 12, 2024

// =============
// Problem
// =============

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

// Notes:
// In the result codes and their values are in the same order as in M.
// See "Samples Tests" for the return.

// function stockList(books, categories) {
//   return "";
// }

// ==============
// Attempt 1
// ==============

// __Inputs:
// books: string[] -> "L" array of strings with book codes, represented as 4-5 letters, a space, and an integer representing the number of books under that code
// categories: string[] -> "M" array of characters representing the first character of code that we want the tally of.

// __Edge-Cases:
// if either books or categories are empty, return an empty string

// __Output:
// string -> sum of books under each category, in the format "(A : 20) - (B : 114)"

function stockList(books, categories) {
  // If empty parameters, return empty string
  if (!books || !categories || !books.length || !categories.length) return "";

  //__Method 1: Hash Map

  // Create map based on categories[]
  // Each category gets a key
  // Each key-value starts at 0
  const map = new Map();
  categories.forEach((category) => map.set(category, 0));

  // console.log("Map: ", map)

  // Iterate through books[]
  for (const book of books) {
    // - If map has first character of string
    if (map.has(book[0])) {
      //     - Split string by spaces
      let count = book.split(" ").at(1);
      //     - Increment map value with last element of split array
      map.set(book[0], Number(map.get(book[0])) + Number(count));
      // console.log(`Book[0]: ${book[0]}, Count: ${count}`);
    }
  }

  // Create string from map
  let bookCount = [];

  // - Iterate through Map (is Map iterable...?)
  map.forEach(
    // - Add strings to an array in format (A : 20)
    (val, key) => bookCount.push(`(${key} : ${val})`)
    // console.log(`Map Output: (${key} : ${val})`)
  );

  // - Join array with hyphen -
  // - return string created from joined array
  return bookCount.join(" - ");
}

// __Tests:
console.log(
  stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]),
  ""
);

console.log(stockList(["A", "B", "C", "D"]), "");

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  ),
  "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
);

console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]
  ),
  "(A : 200) - (B : 1140)"
);

// ==============
// Tests
// ==============

// describe("Tests", () => {
//   const chai = require("chai"),
//     { assert } = chai;
//   chai.config.truncateThreshold = 0;

//   function doTest(books, categories, expected) {
//     const message = `books = ${JSON.stringify(
//       books
//     )}\ncategories = ${JSON.stringify(categories)}\n`;
//     const actual = stockList(books, categories);
//     assert.strictEqual(actual, expected, message);
//   }

//   it("sample tests", () => {
//     doTest(
//       ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//       ["A", "B", "C", "D"],
//       "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
//     );
//     doTest(
//       ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
//       ["A", "B"],
//       "(A : 200) - (B : 1140)"
//     );
//   });
// });
