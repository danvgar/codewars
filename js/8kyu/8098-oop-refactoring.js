// https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript
// First Attempt - Apr 29, 2024

// =============
// Problem
// =============

// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

// Here is how the final refactored code would be used:

// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'

// function greet(myName, yourName) {
//   return `Hello ${yourName}, my name is ${myName}`;
// }

// ==============
// Solution 1
// ==============

class Person {
  constructor(name) {
    this.name = name;
  }
  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}

// ==============
// Tests
// ==============

const { assert } = require("chai");

describe("Sample Tests", function () {
  it("Person: name", function () {
    let jack = new Person("Jack");
    let jill = new Person("Jill");
    assert.strictEqual(jack.name, "Jack", `new Person('Jack').name`);
    assert.strictEqual(jill.name, "Jill", `new Person('Jill').name`);
  });

  it("Person.prototype.greet()", function () {
    let jack = new Person("Jack");
    let jill = new Person("Jill");
    assert.strictEqual(
      jack.greet("Jill"),
      "Hello Jill, my name is Jack",
      `new Person('Jack').greet('Jill')`
    );
    assert.strictEqual(
      jill.greet("Jack"),
      "Hello Jack, my name is Jill",
      `new Person('Jill').greet('Jack')`
    );
  });
});
