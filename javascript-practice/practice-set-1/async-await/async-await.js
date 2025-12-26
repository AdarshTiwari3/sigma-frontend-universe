/*
async- This work may take time — don’t stop the rest of the program because of it. async makes asynchronous code look synchronous.

async marks a function as non-blocking and guarantees it returns a Promise.

*/

async function fetchData() {
  return 10;
}
//it returns a promise, means it wraps everything into a promise

const dataPromise = fetchData();

console.log("dataPromise=", dataPromise); //dataPromise= Promise { 10 }

// correct way to log it

dataPromise.then((output) => console.log("data=", output)); //data= 10

/*
await - it waits untill the promise is resolved or Pause here until the result is ready, then continue.
or await pauses an async function until a Promise settles and returns its result without blocking the rest of the program.
await is used only inside async function
*/

let p = Promise.resolve("Api Data is stored here");

async function fetchApiData() {
  const data = await p;
  console.log("API data=", data); //API data= Api Data is stored here
}

fetchApiData();

// v. important - await is used only inside async function
// lets call a json placeholder api using fetch

async function fetchJsonData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // holds only 10 users data

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    //   const dataPromise = response.json(); // no await
    //   console.log(dataPromise);

    const data = await response.json(); // .json() returns a Promise. why .json() ? because response.body does not have readable data so it needs to be parsed using this
    console.log(data);
  } catch (err) {
    console.error("Error=", err);
  }
}

fetchJsonData();
