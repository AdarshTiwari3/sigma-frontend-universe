// Issues with Callbacks:

// 1. Callback Hell – a callback calls another callback from inside it
// When callbacks are nested inside other callbacks,
//  causing deeply indented, hard-to-read and hard-to-maintain code.

// 2. Inversion of Control – We pass our callback to another function,
//    and now we depend on that function to call it correctly.
//    We lose control over when, how, or even IF the callback is executed.

setTimeout(() => {
  console.log("Step 1 is called");
  setTimeout(() => {
    console.log("Step 2 is called");
    setTimeout(() => {
      console.log("Step 3 is called");
      setTimeout(() => {
        console.log("Step 4 is called");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// now this is the call back hell
/* 
But why this is callback- Each callback is inside another callback → forms a pyramid

└─ setTimeout
    └─ setTimeout
        └─ setTimeout
            └─ setTimeout

*/

//Solve this using promise chaining

function delay(ms) {
  const res = new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("time can't be negative"));
      //   return;
    }
    setTimeout(resolve, ms);
  });
  return res;
}

delay(1000)
  .then(() => {
    console.log("Step 1 Done in 1000 ms");
    return delay(2000);
  })
  .then(() => {
    console.log("Step 2 Done in 2000 ms");
    return delay(3000);
  })
  .then(() => {
    console.log("Step 3 Done in 3000 ms");
    return delay(-200);
  })
  .catch((err) => console.error("Error=", err));

//another example

delay(1000)
  .then(() => console.log("A"))
  .then(() => console.log("B"))
  .then(() => console.log("C"));

/* 
Output=

Step 1 is called
Step 1 Done in 1000 ms
A
B
C
Step 2 is called
Step 2 Done in 2000 ms
Step 3 is called
Step 4 is called
Step 3 Done in 3000 ms
Error= Error: time can't be negative

*/
