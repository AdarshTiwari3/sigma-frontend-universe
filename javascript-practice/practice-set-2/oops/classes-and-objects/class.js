class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    //Inside a JavaScript class, methods are written without the function keyword because the class syntax is just a cleaner way to define methods on the prototype.
    console.log(
      `Hello ${this.name}, Welcome Javscript class, it is just a syntactic sugar over constructor functions + prototypes not pure class and object`
    );
  }
}

const user1 = new User("Andy", 23);
const user2 = new User("John", 88);

user1.greet(); //Hello Andy, Welcome Javscript class, it is just a syntactic sugar over constructor functions + prototypes not pure class and object

user2.greet(); //Hello John, Welcome Javscript class, it is just a syntactic sugar over constructor functions + prototypes not pure class and object

/*

class User {
  greet() {
    console.log("Hi");
  }
}

JavaScript internally converts it to something like:

function User() {}

User.prototype.greet = function () {
  console.log("Hi");
};


*/
