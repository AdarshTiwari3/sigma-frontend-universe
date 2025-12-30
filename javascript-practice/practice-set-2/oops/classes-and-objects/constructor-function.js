// Constructor function - A constructor function is a regular function used to create and initialize objects.
// Note- it behaves like a class, but internally it is not one.

function User(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(
      `Hello ${this.name}, Welcome to the Javascript Constructor Function`
    );
  };
}

const user1 = new User("Johndoe", 55);
const user2 = new User("Andy", 23);

console.log("user1=", user1);
console.log("user2=", user2);

//greet the user1

user1.greet();

/*
Output-

user1= User { name: 'Johndoe', age: 55, greet: [Function (anonymous)] }
user2= User { name: 'Andy', age: 23, greet: [Function (anonymous)] }
Hello Johndoe, Welcome to the Javascript Constructor Function

*/

// comparison with class

/*

function User(name) {
  this.name = name;
}

class User {
  constructor(name) {
    this.name = name;
  }
}
  */
