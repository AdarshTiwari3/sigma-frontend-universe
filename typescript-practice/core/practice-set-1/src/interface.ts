// Interface in typescript - An interface is a contract that an object must follow.

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Sandy",
  age: 25,
};

console.log("user=", user); //user= { name: 'Sandy', age: 25 }

interface Person {
  name: string;
  greet: () => void;
}

const person: Person = {
  name: "Ranzo",
  greet: function () {
    console.log("Hello");
  },
};
person.greet();
console.log("greet=", person);
