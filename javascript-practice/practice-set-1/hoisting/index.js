
print()
console.log(a)
printX() //will throw error: Uncaught TypeError: printX is not a function because while Memory allocation it is behaving like variable which initially sets as undefined
var a=111

function print(){
    console.log("I am hoisting lecture")
}

var printX=()=>{
    console.log("X")
}

// let and const are also hoisted, but they are not initialized during memory creation. but var is initialized with undefined
// They stay in the Temporal Dead Zone (TDZ) from the start of the scope 
// until the actual declaration line is executed.
// Temporal Dead Zone is the time between entering the scope and the actual initialization of let or const
// Because let/const are stored in the lexical environment/scope (not in the global object),
// accessing them before initialization throws a ReferenceError instead of undefined.
// V.V. Imp - TDZ ends at the moment the let or const declaration line is executed.( `let a` - here TDZ ends does not matter if you define a=10 or not)

// {
//     // TDZ starts here (scope begins)

//     console.log(a);  // ❌ ReferenceError (TDZ)

//     let a = 10;      // Declaration + Initialization (TDZ ends)

//     console.log(a);  // ✔️ 10 (safe)
// }

