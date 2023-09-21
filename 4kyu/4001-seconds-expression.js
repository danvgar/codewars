// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// First Attempt - Apr 1, 2023
// Second Attempt - Sept 20, 2023


// =============
// Problem
// =============

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// function formatDuration (seconds) {
//     // Complete this function
// }


// ==============
// Solution 1
// ==============

function formatDuration(input) {
    const ONE_MIN = 60              // 1 min = 60 s
    const ONE_HR = 3600             // 1 hr = 60 min = 3600 s
    const ONE_DAY = 86400           // 1 day = 24 hr = 1440 min = 86400 s
    const ONE_YR = 3156000          // 1 yr = 365 day = 8760 hr = 525600 min = 31536000 s

    const TWO_MIN = 2 * ONE_MIN     // 2 min = 120 s
    const TWO_HR = 2 * ONE_HR       // 2 hr = 7200 s
    const TWO_DAY = 2 * ONE_DAY     // 2 day = 172800 s
    const TWO_YEAR = 2 * ONE_DAY    // 2 yr = 6307200 s

    console.log(`Initial Value: ${input} seconds`)

    // less than a minute
    if (input < ONE_MIN) {
        // single second
        if (input < 2) {
            let result = `${input} second`
            console.log(`Less than 1 min: ${input} second \n`)
            return result

            //multiple seconds
        } else {
            let result = `${input} seconds`
            console.log(`Less than 1 min: ${input} seconds \n`)
            return result
        }

        // less than an hour
    } else if (input < TWO_MIN) {
        // single minute, no seconds
        if (input < TWO_MIN && input % ONE_MIN === 0) {
            let result = `${Math.floor(input / ONE_MIN)} minute`
            console.log(`Less than 1 hr: ${result} \n`)
            return result

            // single minute, some seconds
        } else if (input < TWO_MIN) {
            let result = `${Math.floor(input / ONE_MIN)} minutes and ${input % ONE_MIN} seconds`
            console.log(`Less than 1 hr: ${result} \n`)
            return result

            // } else  if(input <  {
            //     let result = `${Math.floor(input / ONE_MIN)} minute and ${input % ONE_MIN} seconds`
            //     console.log(`Less than 1 hr: ${result} \n`)
            //     return result
            // }

        } else if (input < ONE_DAY) { // less than a day
            let result = `${Math.floor(input / ONE_MIN)} minutes and ${input % ONE_MIN} seconds`
            console.log(`Less than 1 hr: ${result} \n`)
            return result

        }
    }
}


// ==============
// Solution 2
// ==============


// 1 min = 60 s
// 1 hr = 60 min = 3600 s
// 1 day = 24 hr = 1440 min = 86400 s
// 1 yr = 365 day = 8760 hr = 525600 min = 31536000 s

function formatDuration(seconds) {
    if (seconds === 0) {
        return `now`
    }

    let yy = 0
    let dd = 0
    let hh = 0
    let mm = 0
    let ss = seconds

    // the math part
    yy = Math.floor(ss / 31536000)
    ss -= (yy * 31536000)

    dd = Math.floor(ss / 86400)
    ss -= (dd * 86400)

    hh = Math.floor(ss / 3600)
    ss -= (hh * 3600)

    mm = Math.floor(ss / 60)
    ss -= (mm * 60)

    // the string part
    let arr = []

    if (yy > 1) {
        arr.push(`${yy} years`)
    } else if (yy === 1) {
        arr.push(`${yy} year`)
    }

    if (dd > 1) {
        arr.push(`${dd} days`)
    } else if (dd === 1) {
        arr.push(`${dd} day`)
    }

    if (hh > 1) {
        arr.push(`${hh} hours`)
    } else if (hh === 1) {
        arr.push(`${hh} hour`)
    }

    if (mm > 1) {
        arr.push(`${mm} minutes`)
    } else if (mm === 1) {
        arr.push(`${mm} minute`)
    }

    if (ss > 1) {
        arr.push(`${ss} seconds`)
    } else if (ss === 1) {
        arr.push(`${ss} second`)
    }

    let str = arr.join(", ")
    if (arr.length > 1) {
        let lastCommaIndex = str.lastIndexOf(", ")
        str = str.substring(0, lastCommaIndex) + ' and' + str.substring(lastCommaIndex + 1);
    }

    return str
}

// return `${yy} years, ${dd} days, ${hh} hours, ${mm} minutes, and ${ss} seconds`
formatDuration(60)
formatDuration(3600)
formatDuration(86400)
formatDuration(3153600)





// (seconds) if seconds < 60, print "${seconds} seconds"
// (minutes) else if seconds < 3600 s, print seconds = ${seconds} % 60
//  `${Math.floor(3599 / 60)} minutes and ${3599 % 60} seconds`)


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(formatDuration(1), "1 second");
        assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
        assert.strictEqual(formatDuration(120), "2 minutes");
        assert.strictEqual(formatDuration(3600), "1 hour");
        assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    });
});
