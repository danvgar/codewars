// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// First Attempt - Apr 9, 2023


// =============
// Problem
// =============

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// function isValidWalk(walk) {
//     //insert brilliant code here
// }


// ==============
// Solution 1
// ==============

function isValidWalk(walk) {
    console.log(`\n Initial Array: ${walk}`)
    console.log(`Length: ${walk.length}`)
    console.log(`10 Min?: ${walk.length === 10}`)
    if (walk.length !== 10){
        console.log(`First test: ${walk.length !== 10}`)
        return false
    } else {
        let verTotal = 0
        let horTotal = 0
        
        for(let i = 0; i < walk.length; i++) {
            if(walk[i] === "n") {
                verTotal += 1
            } else if(walk[i] === "s") {
                verTotal -= 1
            } else if(walk[i] === "e") {
                horTotal += 1 
            } else if(walk[i] === "w") {
                horTotal -= 1  
            }
        }
        
        if(verTotal === 0 && horTotal === 0) {
            return true
        } else {
            return false
        }
        
    }
}



// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        //some test cases for you...
        assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
        assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
        assert.isFalse(isValidWalk(['w']), 'should return false');
        assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
        
    });
});
