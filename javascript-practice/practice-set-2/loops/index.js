// for loops

const arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("sum=", sum); // 15

//print 5 to 1

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("\nend\n");
// while loop

let idx = 1;

while (idx <= 5) {
  console.log(idx);
  idx++;
}

//special loops on array
// for of loop

for (const element of arr) {
  // iterator
  console.log("element=", element);
}
/*
output-
element= 1
element= 2
element= 3
element= 4
element= 5
*/

//take an example of an array of objects

const myObj = [
  {
    id: 1,
    name: "Andy",
  },
  {
    id: 2,
    name: "John Snow",
  },
  {
    id: 3,
    name: "Randy Ortan",
  },
];

for (const element of myObj) {
  console.log("id=", element.id, "name=", element.name);
}

// or
for (const { id, name } of myObj) {
  console.log("id=", id, "name=", name);
}

const myMap = new Map(); //stores unique keys, Keys must be unique, but values can absolutely be changed.

console.log("myMap=", myMap);

myMap.set("1", "Andy");
myMap.set("2", "John");
myMap.set("3", "Smith");

console.log("myMap=", myMap); //myMap= Map(3) { '1' => 'Andy', '2' => 'John', '3' => 'Smith' }

for (const key of myMap) {
  console.log("key=", key); //key= [ '1', 'Andy' ] and so on
  console.log("key=", key[0]); //prints keys only like '1', '2', '3'
}

//or

for (const [key, value] of myMap) {
  console.log("key=", key, "value=", value);
}
// key= 1 value= Andy
// key= 2 value= John
// key= 3 value= Smith

// object are not iterable

/*

const obj = { a: 1, b: 2 };

for (const x of obj) {
  console.log("ele=", ele); //error
}

*/

//Correct ways to iterate objects - use for in

const obj = { a: 1, b: 2 };

for (const key in obj) {
  console.log("ele=", obj[key]);
}
// ele= 1
// ele= 2

// can for in work for an array

for (const key in myObj) {
  console.log("key=", key, "val=", myObj[key]);
}

// for in on normal array but used in real case

for (const key in arr) {
  console.log(`arr[${key}]=${arr[key]}`);
}
/*
output:

arr[0]=1
arr[1]=2
arr[2]=3
arr[3]=4
arr[4]=5
*/

// already practiced the filter map reduce and forEach and someother loops in array practice
