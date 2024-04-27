// https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript
// First Attempt - Apr 26, 2024

// =============
// Problem
// =============

// Fun with ES6 Classes #2 - Animals and Inheritance
// Overview
// Preloaded for you in this Kata is a class Animal:

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }
// Task
// Define the following classes that inherit from Animal.

// I. Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

// II. Cat
// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

// Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
// III. Dog
// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

// Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).

// Get Coding :)

// class Shark extends Animal {
//   constructor(/* Insert your parameters here */) {
//     super(/* Make a call to the parent class's constructor with the correct arguments */);
//   }
// }

// class Cat extends Animal {
//   // Do the same here as you did for Shark - define your constructor function and any other methods you need
// }

// class Dog extends Animal {
//   // On your own now - you can do it :D
// }

// ==============
// Solution 1
// ==============

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// ==============
// Tests
// ==============

describe("The Shark class", () => {
  it("should construct an object properly", () => {
    var billy = new Shark("Billy", 3, "Alive and well");
    Test.assertEquals(billy.name, "Billy");
    Test.assertEquals(billy.age, 3);
    Test.assertEquals(billy.legs, 0);
    Test.assertEquals(billy.species, "shark");
    Test.assertEquals(billy.status, "Alive and well");
    Test.assertEquals(
      billy.introduce(),
      `Hello, my name is Billy and I am 3 years old.`
    );
    var charles = new Shark("Charles", 8, "Finding a mate");
    Test.assertEquals(charles.name, "Charles");
    Test.assertEquals(charles.age, 8);
    Test.assertEquals(charles.legs, 0);
    Test.assertEquals(charles.species, "shark");
    Test.assertEquals(charles.status, "Finding a mate");
    Test.assertEquals(
      charles.introduce(),
      `Hello, my name is Charles and I am 8 years old.`
    );
  });
});

describe("The Cat class", () => {
  it("should construct an object properly", () => {
    var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
    Test.assertEquals(cathy.name, "Cathy");
    Test.assertEquals(cathy.age, 7);
    Test.assertEquals(cathy.legs, 4);
    Test.assertEquals(cathy.species, "cat");
    Test.assertEquals(cathy.status, "Playing with a ball of yarn");
    Test.assertEquals(
      cathy.introduce(),
      "Hello, my name is Cathy and I am 7 years old.  Meow meow!"
    );
    var spitsy = new Cat("Spitsy", 6, "sleeping");
    Test.assertEquals(spitsy.name, "Spitsy");
    Test.assertEquals(spitsy.age, 6);
    Test.assertEquals(spitsy.legs, 4);
    Test.assertEquals(spitsy.species, "cat");
    Test.assertEquals(spitsy.status, "sleeping");
    Test.assertEquals(
      spitsy.introduce(),
      "Hello, my name is Spitsy and I am 6 years old.  Meow meow!"
    );
  });
});

describe("The Dog class", () => {
  it("should construct an object properly", () => {
    var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
    Test.assertEquals(doug.name, "Doug");
    Test.assertEquals(doug.age, 12);
    Test.assertEquals(doug.legs, 4);
    Test.assertEquals(doug.species, "dog");
    Test.assertEquals(doug.status, "Serving his master");
    Test.assertEquals(
      doug.introduce(),
      "Hello, my name is Doug and I am 12 years old."
    );
    Test.assertEquals(doug.greetMaster(), "Hello Eliza");
  });
});
