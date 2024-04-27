// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
// First Attempt - Apr 27, 2024

// =============
// Problem
// =============

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   return {name: this.firstName + ' ' + this.lastName};
// }

// ==============
// Solution 1
// ==============

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var n = new NameMe("John", "Doe");
    Test.expect(
      typeof n.firstName != undefined && n.firstName == "John",
      "Verifying First name. Object returned should contain the firstname: John"
    );
    Test.expect(
      typeof n.lastName != undefined && n.lastName == "Doe",
      "Verifying Last name. Object returned should contain the lastname: Doe"
    );
    Test.expect(
      typeof n.name != undefined && n.name == "John Doe",
      "Verifying full name. Object returned should contain the full name: John Doe"
    );
  });
});
