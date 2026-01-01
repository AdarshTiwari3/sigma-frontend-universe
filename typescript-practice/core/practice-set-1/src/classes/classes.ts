// class in typescript

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): void {
    console.log(
      `Hello welcome to Typescript class and object practice, your name is ${this.name} and age is ${this.age}`
    );
  }
}

const person = new Person("JohnDoe", 55);

person.greet();

console.log("name=", person.name, "age=", person.age);

/*
Output-
Hello welcome to Typescript class and object practice, your name is JohnDoe and age is 55
name= JohnDoe age= 55
*/
