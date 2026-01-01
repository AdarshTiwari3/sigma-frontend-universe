//Forcefully assertion(Type assertion) tells TypeScript: Trust me — I know the type better than you.
//Forceful (type) assertion in TypeScript means forcing a type using the as keyword.

let myValue: unknown = "hello";

let strValue = (myValue as string).endsWith("o");

console.log("Ends with=", strValue); //Ends with= true

// for html input element

// const input = document.getElementById("email") as HTMLInputElement;

//or

/*
const el = document.getElementById("email");
if (el instanceof HTMLInputElement) {
  el.value = "test@example.com";
}

*/
