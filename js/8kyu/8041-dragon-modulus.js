// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// First Attempt - Apr 29, 2023


// =============
// Problem
// =============

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// function hero(bullets, dragons){
//     //Get Coding!
// }


// ==============
// Solution 1
// ==============

function hero(bullets, dragons){
    return bullets / dragons >= 2
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', function() {
    it("Testing for fixed tests", () => {
        assert.strictEqual(hero(10, 5), true);
        assert.strictEqual(hero(7, 4), false);
        assert.strictEqual(hero(4, 5), false);
        assert.strictEqual(hero(100, 40), true);
        assert.strictEqual(hero(1500, 751), false);
        assert.strictEqual(hero(0, 1), false);
    });
});

