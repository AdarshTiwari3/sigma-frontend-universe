// "use strict";

// objects in javscripts
const user1 = Object.create({ name: "ronit" });
console.log("user1=", user1.name); // user1= [Object: null prototype] {}

// using object literals - An object literal is an object created using {} with properties defined directly inside it.

const user2 = {};

user2.name = "andy";
console.log("user2=", user2); // user2= { name: 'andy' }

console.log("name=", user2["name"]); //name= andy

// symbol - it always creates a unique key, it is used to achieve uniqueness

const sym1 = Symbol();
const sym2 = Symbol();

console.log("sym1==sym2", sym1 == sym2); // false, both will be unique

const id = Symbol("key1");

user2[id] = 123;

console.log(user2); // { name: 'andy', Symbol(key1): 123 } or
const user = {
  name: "johndoe",
  [id]: "key1",
};

console.log(user[id]); // "key1"
console.log(Object.keys(user)); // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(key1) ]

// Object.freeze(user2); // now user2 will be freezed means read only

// user2.email = "test@test.com";

/*
console.log(user2); //ser2.email = "test@test.com";


TypeError: Cannot add property email, object is not extensible

Note- if we use 'use strict' mode

*/

const product = new Object(); // Object() must be singleton
// All objects share one prototype
const p1 = {};
const p2 = {};
console.log("p1==p2", Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2));

console.log("Product=", product);

p1["a"] = 1;
p1["b"] = 2;
p2["c"] = 3;
p2["d"] = 4;
console.log(p1, p2);

const p = Object.assign({}, p1, p2); // {} optional argument as it guarantees to return an object only
// const p = Object.assign(p1, p2); // It mutates p1

// p1 is modified

// p and p1 reference the same object

console.log("p=", p); // p= { a: 1, b: 2, c: 3, d: 4 }

const p3 = { ...p1, ...p2 }; // returns new object , best approach

console.log("p3=", p3); // p3= { a: 1, b: 2, c: 3, d: 4 }

// collect the keys

const keys = Object.keys(p3); // returns an array

console.log("Keys=", keys); // Keys= [ 'a', 'b', 'c', 'd' ]

const entries = Object.entries(p3);
console.log("entries=", entries); // entries= [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

const values = Object.values(p3);
console.log("Values=", values); //Values= [ 1, 2, 3, 4 ]

// check if key is present or not

const isBpresent = Object.hasOwn(p3, "b"); // this is better than other ways

const isCpresent = p3.hasOwnProperty("c");

console.log("isB=", isBpresent, "isC=", isCpresent);
