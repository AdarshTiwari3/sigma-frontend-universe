
// Currying breaks a multi-argument function into multiple single-argument functions that remember previous arguments using closure.
function add(a){
    return function (b){
        return a+b
    }
}
console.log(add(2)(3)) //5

/* 
Currying breaks a multi-argument function into single-argument functions. 
Here, add(2) sets a = 2 and returns another function. That inner function receives b,
and since it remembers variable `a` through closure, it returns a + b = 5.
*/

// Task -1 print something inside setTimeout

function print(){
    var x=10
    setTimeout(()=>{
        console.log("x=",x)
    },1000)
    console.log("I am set 1")
}
print()

/* 
output: 
I am set 1
x= 10
Here first I am set 1 will be printed then x, because of how Javscript runtime environment works
*/



// Task -2 print 1 to 5 after 1 2 3 4 5 seconds
function print(){
    for( var i = 1 ; i<=5; i++){
        setTimeout(()=>{
            console.log(`i=${i}`)
        }, i*1000)
    }
}
print()

/*
output:
i=6 logged 5 times
why?
because of closure here setTimeout forms a closure with i and loop runs and when it completes till then value of i becomes 6
so how to resolve it - 
solution 1- use let because it forms different scope everytime
solution 2 - use closure and put into a scope 
*/

function print(){
    for( let i = 1 ; i<=5; i++){
        setTimeout(()=>{
            console.log(`i=${i}`)
        }, i*1000)
    }
}
print()

/*
output:
i=1
i=2
i=3
i=4
i=5

*/

// Solution -2

function print(){
    for( var i = 1 ; i<=5; i++){
        function inner(j){
            setTimeout(()=>{
            console.log(`i=${j}`)
        }, j*1000)
        }
        inner(i)
        
    }
}
print()

// why because everytime when inner(i) is invoked then function inner forms a closure with value of i and everytime value will be changed as a new
