// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
// First Attempt - June 10, 2023


// =============
// Problem
// =============

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.

// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

// function titleCase(title, minorWords) {

// }

// P: input will be two arguments, the first (required) will be the string to be converted. the second (optional) will be a string of space-delimited words. if title is empty string, return empty string
// R: output will be the first argument with every word in "title case" such that only the first letter is uppercase - except for any instances of the words from the second argument
// E: ('a clash of KINGS', 'a an the of') -> 'A Clash of Kings'
// P: 
// check for edge cases.
// split title by spaces. convert to lower case. 
// if minorWords exists, split by spaces and convert to lowercase, else it is empty string ""
// for each element of title array, check if microWordsArray includes in element. if it does, increase iteration
// else if not included in microWordsArray, convert string element into an array and make first index or character uppercase.
// return joined title with space separations.

// ==============
// Solution 1
// ==============

function titleCase(title, minorWords) {
  console.log(`\n\nTitle: ${title}`)
  console.log(`Minor Words: ${minorWords}`)
  
  // check for edge cases
  if(title.length === 0) {
    return ""
  }
  
  // split title by spaces. convert to lower case. 
  title = title.toLowerCase().split(" ")
  console.log(`Split Lowercase Title: ${title}`)
  
  // if minorWords exists, split by spaces and convert to lowercase, else it is empty string ""
  if(minorWords) { 
    minorWords = minorWords.toLowerCase().split(" ")
    console.log(`Split Lowercase Micro Words: ${minorWords}`)
  } else {
    minorWords = ""
  }
  
  // for each element of title array, check if microWordsArray includes in element. if it does, increase iteration
  for(let i = 0; i < title.length; i++) {
    console.log(`\n\nFor Loop Title: ${title}`)
    console.log(`For Loop Minor Words: ${minorWords}`)
    console.log(`Element at Index ${i}: ${title[i]}`)
    console.log(`Does i = 0?: ${i === 0}`)
    console.log(`Element is not in minorWords?: ${!minorWords.includes(title[i])}`)
    
    // if first word of title or not in minor words list, it is capitalized
    if(i === 0 || !minorWords.includes(title[i])){
      console.log(`Run if loop?: ${i === 0 || !minorWords.includes(title[i])}`)
      title[i] = title[i].split("").map( (char, j) => j === 0 ? char.toUpperCase() : char ).join("") 
      
      // else if it's in the minor words list, it is already in lower case so skip over it. 
    } else if(minorWords.includes(title[i])) {
      continue
    }
  }
  console.log(`New Title: ${title}`)
  
  // return joined title with space separations.
  return title.join(" ")
  
}



// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(titleCase(''), '')
    Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
    Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
    Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
    
  });
});
