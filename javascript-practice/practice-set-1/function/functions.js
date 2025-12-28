// Function Declaration - sometimes informally say “function statement,”
// Function Statement: writing a function using the function keyword with a name.

function print() {
    console.log("I am Javascript");
}
print();


// Function Expression
let x=()=>{
    console.log("I am function expression")
}
x()



/* 
Anonymous Function: a function without a name.
It cannot exist on its own — it must be assigned to a variable,
passed as an argument, or returned from another function.

*/

let anonymous = function() {
    console.log("Hi I am Anonymous Function");
};

anonymous();



// Named Function Expression- A function expression in which the function has its own name.
let y = function print() {
    console.log("I am a named function expression");
};

y();

let fact = function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

console.log(fact(5)); // 120

// Difference between parameters and arguments:
// Parameters are variables listed in the function definition.
// Arguments are the actual values passed to the function when calling it.

function add(a, b) {   // a & b are parameters
    return a + b;
}

console.log(add(2, 3));   // 2 & 3 are arguments

/*
 First-Class Functions:
 In JavaScript, functions are treated like values.
 They can be assigned to variables, passed as arguments,
 and returned from other functions. This ability is called
 "first-class functions" or "first-class citizens".

 */

 function greet() {
    return "Hello";
}

// Assign function to a variable
let a = greet;

// Pass function as an argument
function callMe(fn) {
    console.log(fn());
}
callMe(greet);

// Return a function from another function
function outer() {
    return function inner() {
        console.log("I am inner");
    };
}

outer()();


// Arrow Function- An Arrow Function is a shorter and more concise way to write function expressions in JavaScript.
const addition = (a, b) => a + b;
console.log(addition(5,4));

//Immediately Invoked Function Expressions IIFE- it avoids polluting global scope
(function () {
  console.log("IIFE executed");
})();
