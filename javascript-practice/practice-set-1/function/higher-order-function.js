// Higher-Order Function:
// A function that takes another function as an argument,
// or returns a function, or does both, is called a Higher-Order Function.

function greet(name, callback) {   // callback passed → HOF-> greet
    console.log("Hello " + name);
    callback();
}

greet("Xoxo Smith", () => console.log("Welcome!"));

// greet is a Higher-Order Function

// because it accepts a function as an argument.


//another example

function print(){
    console.log("HOF")
}

function printFunction(print){
    print()
}

printFunction(print)
 