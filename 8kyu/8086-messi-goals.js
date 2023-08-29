// https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript
// First Attempt - Aug 28, 2023


// =============
// Problem
// =============

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

//   Note: the input will always be valid.

// For example:

// 5, 10, 2  -- > 17

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
// }

// ==============
// Solution 1
// ==============

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(goals(0, 0, 0), 0)
    Test.assertEquals(goals(43, 10, 5), 58)
  });
});
