
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

