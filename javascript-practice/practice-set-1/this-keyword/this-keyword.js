// "use strict";

// All about this keyword in javascript as it behaves very different in js in different circumstances

// please note - this keyword behaves differently in browser and in Node.js, we will practice for browser

// This in global space

console.log("This=", this); // on local inside vscode it points to {} empty object but on browser it points to the window object

console.log("this==window:", this === window); // this will work inside browser and give true result but inside vscode it throws error

let x = 10;

console.log("this.x == window.x", this.x === window.x); //true because both are undefined because let is created at sperate scope not in global so undefined === undefined = true
//JavaScript does NOT throw an error for missing properties. so even x is not in global it will still give undefined because here this.x is not like variable properties

console.log("this.x=", this.x); // undefined (property does not exist)
console.log("window.x=", window.x); // undefined (property does not exist)

//NOT because x is global Because missing properties return undefined
console.log("this.y=", this.y); // undefined
//console.log("y=", y); //error - not defined , this is variable lookup not property lookup

// v.imp - this keyword value depends on how `this` is called

function print() {
  console.log(this); // it gives the window object but it is different from global window also if we use "use strict" mode then this will be undefined
}
print(); // undefined in "use strict" mode
// but when we call window.print() , it will again give window object because windows reference has been passed or it was called by window object
// window.print();

const myObj = {
  x: 11,
  run: function () {
    console.log(this);
    console.log(this.x); // prints x as 11
  },
};

myObj.run(); //{x: 11, run: ƒ} // this depends on how the function is called, not where it is defined

/*
call, apply, and bind are used to CONTROL what this points to. ---> it is used in sharing methods
or call, apply, and bind are used in sharing methods.

One object has a function.
Another object wants to use that same function
without copying it.

v.v.v.imp-

call  -> run the function now with a chosen this or Run the function right now, using THIS object.
apply -> same as call but arguments are in an array or run now, but I will give arguments in an array.
bind  -> create a new function with this fixed forever or Lock this person forever, run later


*/

// call- runs immediately

const greetObj = {
  name: "John Doe",
  greet: function (city) {
    console.log(`Hello I am ${this.name} from ${city}`);
  },
};

greetObj.greet("New York");

// now we want to reuse the method using call

const admin = {
  name: "Rambo",
};

greetObj.greet.call(admin, "DC"); // Use the SAME function, but treat admin as this

// apply- runs immediately
greetObj.greet.apply(admin, ["Texas"]); // it is used when a number of params are used in base function ->> this --> admin

//bind- Fix (lock) the value of this forever and use the function later.

const adminGreet = greetObj.greet.bind(admin, "Paris"); //`this` is permanently set to admin, once a function is bind-ed, you CANNOT change this again using call or apply.

adminGreet();
// bind does NOT change the original function.
// It creates a NEW function.
// does NOT affect greetObj.greet at all.
greetObj.greet("XYZ"); // that's is reason it is allowed as original function remain unchanged
