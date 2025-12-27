let y = 10;
var x = 11;
{
  var x = 1;
  let y = 2;
  const z = 10;
  console.log("Inside Block");
  console.log(x);
  console.log(y);
  console.log(z);
}

console.log("Outside Block");
console.log(x);
console.log(y);
console.log(z);

/*output:
Inside Block
index.js:7 1
index.js:8 2
index.js:9 10
index.js:12 Outside Block
index.js:13 1
index.js:14 10
index.js:15 Uncaught ReferenceError: z is not defined
    at index.js:15:13

because let maintains a different block scope everytime
why value of x is still 1, because var usage global scope and even if you create inside scope {} it will still point to global only hence value is changed to 1
*/
