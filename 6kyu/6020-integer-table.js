// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
// First Attempt - Oct 11, 2023

// =============
// Problem
// =============

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

// multiplicationTable = function (size) {
//   // insert code here
// }



// ==============
// Solution 1
// ==============

multiplicationTable = function (size) {
  // console.log(`Input: ${size}`)
  let table = []
  let row = []
  for (let i = 1; i < size + 1; i++) {
    row = Array.from(Array(size), (x, i) => (i + 1))
    row = row.map(element => element * (i))
    // console.log(`Row: ${row}`)
    table.push(row)
    // console.log(`Table: ${table}`)
  }
  return table
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
});
