// A callback function is a function that you pass as an argument to another function,
// and that function will call it later when it’s needed.

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Andy", sayBye);

//real life example

setTimeout(function() {
    console.log("Timer finished!");
}, 1000);

// The anonymous function is a callback, called after 1 second.
