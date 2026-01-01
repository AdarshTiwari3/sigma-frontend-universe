// interfaces define behavior, classes implement behavior.

interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  makeSound() {
    console.log("Bark");
  }
}

const dog = new Dog();
dog.makeSound(); //Bark
