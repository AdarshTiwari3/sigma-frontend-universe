// Array in Typescript

const myArr: string[] = ["Hi", "Hello", "Hey"];

// or

const mathArr: Array<string> = ["floor", "ceil", "round"];

console.log("Arr1=", myArr, "Arr2=", mathArr);

/*

Arr1= [ 'Hi', 'Hello', 'Hey' ] Arr2= [ 'floor', 'ceil', 'round' ]

*/

const myNum: number[] = [1, 2, 3, 4, 5];

let myTuple: [string, number] = ["Hi", 1];

myTuple = ["Hi", 3];

console.log("tuple=", myTuple);

const arr: readonly boolean[] = [true, false, true];

// it will be initialized once only then it can be set again as it is readonly

console.log("boolean array=", arr);

/* 
output:
Arr1= [ 'Hi', 'Hello', 'Hey' ] Arr2= [ 'floor', 'ceil', 'round' ]
tuple= [ 'Hi', 3 ]
boolean array= [ true, false, true ]
*/
