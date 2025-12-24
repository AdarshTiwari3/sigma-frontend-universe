//Promise chaining- Promise chaining is when you run async steps one after another by returning a value (or Promise) from one .then() to the next.

const ans = Promise.resolve(5)
  .then(x => x * 2)
  .then(x => x * 3)
//   .then((x)=>console.log("x=",x));

 ans.then(res=> console.log("Result=",res))

async function doSomeCalculation(){
    const ans= await Promise.resolve(5).then(function(x){
        let res=0
        for (let index = 0; index < 100000; index++) {
            res += x+index
        }
        return res
    })
    console.log("Output=",ans)
}

doSomeCalculation()
console.log("End")


/*

Output- End
Output= 5000450000
Result= 30

because of how Javascript runtime environment and event loop run
or 
Output order explanation:
1. "End" is logged during synchronous execution.
2. `await` pauses `doSomeCalculation`, scheduling its continuation as a microtask.
3. Promise callbacks (`then` and `await`) are executed from the microtask queue after the call stack is empty.
4. Microtasks run in the order they are queued, so the `await` continuation runs before the `.then()` callback.

*/