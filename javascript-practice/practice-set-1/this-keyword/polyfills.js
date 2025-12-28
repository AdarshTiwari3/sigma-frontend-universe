// Function polyfills, we create our own bind function using Prototype. it can be used with any function
Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;

  return function (...callArgs) {
    return originalFn.apply(context, [...bindArgs, ...callArgs]);
  };
};




function greet(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const user1 = { name: "JohnDoe" };

const myBoundGreet = greet.myBind(user1, "London"); // here user1 will be context


myBoundGreet("UK"); //JohnDoe from London, UK


