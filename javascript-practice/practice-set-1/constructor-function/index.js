//Constructor Function

// Task- Implement a counter 

function Counter(){
    let count=0
    this.incrementCounter=function() {
        count++
        console.log(count)
    }
    this.decrementCounter= ()=>{ 
        /* 
        Using an arrow function is fine here because we are not relying on `this`.
        Arrow functions do NOT have their own `this`, but in this case it doesn't matter. 
         */
        count--
        console.log(count)
    }
}

let counter= new Counter() // new keyword is required to invoke the constructor

counter.incrementCounter() //1
counter.incrementCounter() //2
counter.decrementCounter() //1

/*
count is private (because it’s inside the constructor scope).
incrementCounter and decrementCounter form closures over count.
new Counter() correctly creates an object.
Methods correctly update and log the value.

*/


