//Promise chaining- Promise chaining is when you run async steps one after another by returning a value (or Promise) from one .then() to the next.

const ans = Promise.resolve(5)
  .then((x) => x * 2)
  .then((x) => x * 3);
//   .then((x)=>console.log("x=",x));

ans.then((res) => console.log("Result=", res));

async function doSomeCalculation() {
  const ans = await Promise.resolve(5).then(function (x) {
    let res = 0;
    for (let index = 0; index < 100000; index++) {
      res += x + index;
    }
    return res;
  });
  console.log("Output=", ans);
}

doSomeCalculation();
console.log("End");

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

//Promise.all() - if any promise inside it ,fails it will fall under reject

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((results) => {
  // wait for all of them to finish, it takes the max of all apis time i.e if p1- 3s, p2-5s and p3-1s the total time for all will be 5s max from all
  console.log(results); //[ 10, 20, 30 ]
});

// Promise.race()
// It does not wait for all promises.
// It settles as soon as the FIRST promise settles (resolve OR reject).
// If the first settled promise fails, it rejects.
// If the first settled promise succeeds, it resolves.
// word- settled means we got the results it could resolve means success(fullfilled) or failure(reject or rejected)

const fast = new Promise((resolve) =>
  setTimeout(() => resolve("Fast 🏎️"), 1000)
);

const slow = new Promise((resolve) =>
  setTimeout(() => resolve("Slow 🐢"), 3000)
);

Promise.race([fast, slow]).then((result) => console.log(result)); // only Fast 🏎️

/*
Promise.allSettled() -  waits for ALL promises to finish (resolve or reject) and never fails.
It returns the result of EVERY promise, including both successes and failures.

*/

const pr1 = Promise.resolve(11);
const pr2 = Promise.reject("Something wrong");
const pr3 = Promise.resolve(12);

Promise.allSettled([pr1, pr2, pr3]).then((output) => console.log(output));

/* 
output- [
  { status: 'fulfilled', value: 11 },
  { status: 'rejected', reason: 'Something wrong' },
  { status: 'fulfilled', value: 12 }
]
  */

// Promise.any()
// It resolves as soon as ANY one promise is fulfilled (success).
// It ignores rejected promises.
// If ALL promises reject, it rejects with an AggregateError.

let promise1 = Promise.reject("Error 1");
let promise2 = Promise.reject("Error 2");
// let promise3 = Promise.reject("Error 3");
let promise3 = Promise.resolve("Success 🎉");

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log("Result =", result)) //Result = Success 🎉
  .catch((err) => console.log(err));

//[AggregateError: All promises were rejected] {
//[errors]: [ 'Error 1', 'Error 2', 'Error 3' ]}

//more cleaner way using await

async function run() {
  try {
    const result = await Promise.any([p1, p2, p3]);
    console.log("Output(using async/await)=", result);
  } catch (err) {
    console.error(err);
  }
}

run();
