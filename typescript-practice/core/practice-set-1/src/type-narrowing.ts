//Type narrowing = reducing a broad type into a more specific type at runtime checks
// Type narrowing means using runtime checks so that TypeScript can infer a more specific type from a broader type.

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
printValue("Hi I am type narrowing in ts");
printValue(111);
//instanceof narrowing (classes)

class User {
  constructor(public name: string) {}
}

class Admin {
  constructor(public role: string) {}
}

function check(person: User | Admin) {
  if (person instanceof User) {
    console.log(person.name);
  } else {
    console.log(person.role);
  }
}

check(new User("Random"));
check(new Admin("SuperAdmin"));

//truthy falsy narrowing

function printName(name?: string) {
  if (name) {
    console.log(name.toUpperCase()); // string
  }
}

printName("Andy");

//another example

type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };

function handle(response: Success | Error): string {
  if (response.status === "success") {
    return response.data; // Success
  } else {
    return response.message; // Error
  }
}

const res1 = handle({ status: "success", data: "Request completed" });
const res2 = handle({ status: "error", message: "Something went wrong" });
console.log("res1=", res1, "res2=", res2);

/*
output-

HI I AM TYPE NARROWING IN TS
111.00
Random
SuperAdmin
ANDY
res1= Request completed res2= Something went wrong

*/
