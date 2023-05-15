// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// First Attempt - May 14, 2023


// =============
// Problem
// =============

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s){
//     //#Happy Coding! ^_^
// }

// P: input is three positive integer arguments, hours, minutes, and seconds. output is an integer
// R: result needs to be a single positive integer that is the hours, minutes, and seconds converted into a single millisecond sum. 
// E: function(0, 1, 1) -> 61000
// P: store 1 hours to ms conversion, 1 minutes to ms conversion, and 1 seconds to ms conversion. return h*conversion + m*conversion + s*conversion


// ==============
// Solution 1
// ==============

function past(h, m, s){
    const hrPerMillisec = 3600000 // 1hr = 3,600,000 ms
    const minPerMillisec = 60000 // 1min = 60,0000 ms
    const secPerMillisec = 1000 // 1sec = 1,000 ms
    
    return (h * hrPerMillisec) + (m * minPerMillisec) + (s * secPerMillisec)
}

// #firsttry


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Fixed Tests", () => {
    it("Tests", () => {
        assert.strictEqual(past(0,1,1),61000)
        assert.strictEqual(past(1,1,1),3661000)
        assert.strictEqual(past(0,0,0),0)
        assert.strictEqual(past(1,0,1),3601000)
        assert.strictEqual(past(1,0,0),3600000)
    });
});
}
});