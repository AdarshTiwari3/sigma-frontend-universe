// Array in javascript

const arr = ["Hello", "Javascript", 1, 2, 3.0];

console.log("arr=", arr);

//operation on array

const n = arr.length;

console.log("Length=", n); // 5

console.log("Typeof", typeof arr); //Typeof object

// push and pop

arr.push("Practice");

console.log("arr=", arr);

const popped = arr.pop();
console.log("popped=", popped);

const thirdElement = arr.slice(3, 4); // starts at 3rd index(inclusive) and goes till end-1 means 4-1 =3, (3,3)
// slice returns a new array
console.log("ThirdElement=", thirdElement[0]);

console.log("arr=", arr); //arr= [ 'Hello', 'Javascript', 1, 2, 3 ]

const thirdElementUsingSplice = arr.splice(3, 4); // splice(startIndex, deleteCount)
// removes elements from the original array and returns them as a new array
// // splice also returns a new array

console.log("arr=", arr); //arr= [ 'Hello', 'Javascript', 1 ]

console.log("Pop using Splice=", thirdElementUsingSplice);

arr.push(4);
arr.push(5);
arr.push(6);

console.log("arr=", arr); // arr= [ 'Hello', 'Javascript', 1, 4, 5, 6 ]

const valueAt3 = arr.at(1);

console.log(valueAt3); // Javascript

// shift and unshift (note don't use this as it will have O(n) complexity as it shifts every element from left to right)

arr.unshift(10); // pushes an element from left
console.log("arr=", arr); // arr= [ 10, 'Hello', 'Javascript', 1, 4, 5, 6 ]

arr.shift(); // remove an element from left

console.log("arr=", arr); //arr= [ 'Hello', 'Javascript', 1, 4, 5, 6 ]

const arr2 = [11, 22, 33, 44];

const arr3 = arr.concat(arr2); // returns a new array

console.log("arr3=", arr3); // arr3= [ 'Hello', 'Javascript', 1, 4, 5, 6, 11, 22, 33, 44 ]

// another way is, spread operator which spreads or flats the passed array into index

const arr4 = [...arr, ...arr2]; // it also forms a new array

console.log("arr4=", arr4); // arr4= [ 'Hello', 'Javascript', 1, 4, 5, 6, 11, 22, 33, 44 ]

const isFortyFour = arr4.includes(44);

console.log(" 44 available=", isFortyFour);

console.log("index of element 11=", arr4.indexOf(11));

const newArray = arr.join(" "); // changes the array into string

// will get comma seperated if we pass arr.join() only like ---> newArray= Hello,Javascript,1,4,5,6

console.log("newArray=", newArray); // newArray= Hello Javascript 1 4 5 6

// find operation

const result = arr4.find((n) => n > 10); //find() returns the FIRST element in an array that satisfies a condition.

console.log("Result=", result);

console.log(
  "Find 44=",
  arr4.findIndex((ele) => ele === 44) //returns the index
);

const filteredData = arr4.filter((element) => element > 5); // returns a new array

console.log("Filtered data=", filteredData);

const localString = arr4.toLocaleString();

console.log("localString=", localString); //  localString= Hello,Javascript,1,4,5,6,11,22,33,44

const mapDataBool = arr4.map((ele) => ele % 11 == 0); // returns a new array

console.log("mapDataBool=", mapDataBool); /*
mapDataBool= [
  false, false, false,
  false, false, false,
  true,  true,  true,
  true
]

*/

const mapData = arr4.map((ele) => {
  if (ele % 11 == 0) return ele;
});

console.log("mapData=", mapData);

// please note the above example was not best map use , here we should use filter
const myArr = [1, 2, 3, 4];
const mapMultiTwo = myArr.map((ele) => ele * 2);

console.log("Map multiply by 2=", mapMultiTwo); // Map multiply by 2= [ 2, 4, 6, 8 ]

const reduceAcc = myArr.reduce((acc, curr) => curr + acc, 0); // use accumulator, returns sum of the array

console.log("Sum of myArr=", reduceAcc);

// for each - it does something but does not return anything
// usecase- Use forEach when your goal is side effects, not data transformation.
myArr.forEach((element) => {
  console.log(element + 2);
});

// flat()- flattens nested arrays up to a specified depth and returns a new array

const tempArry = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11]]];

const flatArray = tempArry.flat(Infinity); // for infinity it checks all available depth

console.log("Flat Array=", flatArray);
/*
Flat Array= [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
  */

//flatMap() -flatMap() is basically map() + flat(1) in one step

const nums = [1, 2, 3, 4];

const evensDoubled = nums.flatMap((n) => (n % 2 === 0 ? [n * 2] : []));

console.log(evensDoubled); // [4, 8]

// IsArray and from

const isJavascript = Array.isArray("Javascript");
console.log("Is-Js=", isJavascript); // false

//convert this into an array

const jsArray = Array.from("Javascript");

console.log("JsArray=", jsArray);
/*
JsArray= [
  'J', 'a', 'v', 'a',
  's', 'c', 'r', 'i',
  'p', 't'
]
  */

const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]

const a = 23;
const b = 43;

const newArrayOF = Array.of(a, b); // [23 , 43] , returns new array
console.log("newArrayOF=", newArrayOF);
