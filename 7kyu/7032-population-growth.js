// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// First Attempt - July 24, 2023


// =============
// Problem
// =============

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// function nbYear(p0, percent, aug, p) {
//   // your code
// }


// P: input will be a starting population (positive integer), the percent increase per year (as an integer, null, or float), the additional new inhabitants per year (as positive integer), and the final population we are trying to determine the amount of years it will take to reach. 
// R: output will be the number of integer years it will take (at minimum) to meet the given population
// E: given 1000 initial population, 2% increase as well as additional 50 inhabitants per year, and a goal of 1200 inhabitants, it will take 3 years to reach the goal population as ((1000 * 1.02) + 50) iterated 3 times becomes 1213 inhabitants. 
// P:
// let currentPop = p0 
// let timeElapsed = 1;
// while(currentPop < p) {
// currentPop = currentPop * (1 + percent/100) + aug, timeElapsed++
// }
// return timeElapsed


// ==============
// Solution 1
// ==============

function nbYear(p0, percent, aug, p) {
  // console.log(`\n`)
  // console.log(`Initial Population: ${p0}`)
  // console.log(`Percent Increase Per Year: ${percent}`)
  // console.log(`Additional Population: ${aug}`)
  // console.log(`Goal: ${p}`)
  let currentPop = p0
  let timeElapsed = 0
  while(currentPop < p) {
    currentPop = Math.floor(currentPop * (1 + percent/100) + aug)
    timeElapsed++
    // console.log(`Population at Year ${timeElapsed}: ${currentPop}`)
  }
  // console.log(`Final Population: ${currentPop}`)
  // console.log(`Time Elapsed: ${timeElapsed}`)
  return timeElapsed
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("nbYear",function() {
  it("Basic tests",function() {    
    Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
    Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
    Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
  })})