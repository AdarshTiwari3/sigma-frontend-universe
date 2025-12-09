
function outer(){
    let x=11
    function inner(){
        console.log(x)
    
    }
    inner()
}

outer()

//Closure- A function along with its lexical enviroment forms a closure
// here function inner forms a closure with variable(let type) x or inner + x = closure