// https://www.codewars.com/kata/53d628de83db278fb1000710/train/javascript
// First Attempt - May 9, 2024

// =============
// Problem
// =============

// Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.

// To demonstrate this, you'll have to add a new method (called my_new_method in Ruby or myNewMethod in JS / Coffeescript) into the String class that simply calls the upcase method (toUpperCase() in JS / Coffeescript), so that:

// returns

// "ABC"

// Re-open the class String and add the "myNewMethod" method.

// ==============
// Solution 1
// ==============

String.prototype.myNewMethod = function() {
    return this.toUpperCase();
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      "abc".myNewMethod(),
      "ABC",
      '"abc".myNewMethod() should return "ABC"'
    );
  });
});
