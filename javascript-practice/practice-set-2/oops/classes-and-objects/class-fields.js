// class fields in javascript- public, private and protected

//public

class User {
  name;
  age;

  constructor(name, age) {
    //this represents the current context which is User class
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hi ${this.name}, welcome to class fields visibility of Javascript, you are ${this.age} old`
    );
  }
}

const user1 = new User("Ronit", 33);

console.log("username=", user1.name); //username= Ronit

user1.greet(); //Hi Ronit, welcome to class fields visibility of Javascript, you are 33 old

//private field

class Vehicle {
  #engineNumber;
  #speed;

  constructor(engine, speed) {
    this.#engineNumber = engine;
    this.#speed = speed;
  }

  move() {
    console.log(`Vehicle moving at ${this.#speed} km/h`);
  }
}

const v1 = new Vehicle("ENG-123", 90);

v1.move(); // Vehicle moving at 90 km/h
// v1.#engineNumber; //  SyntaxError: Private field '#engineNumber' must be declared in an enclosing class

// -----------------------------------------------------------------

// protected field

class VehicleC {
  // public field
  type;

  // protected field (by convention)
  _speed;

  // private field (real privacy)
  #engineNumber;

  constructor(type, speed, engineNumber) {
    this.type = type;
    this._speed = speed; // protected initialization
    this.#engineNumber = engineNumber; // private initialization
  }

  move() {
    console.log(`${this.type} moving at ${this._speed} km/h`);
  }
}

class Car extends VehicleC {
  accelerate() {
    this._speed += 30;
    console.log(`Car speed increased to ${this._speed}`);
  }
}

const car = new Car("Car", 60, "ENG-101");
car.move(); //Car moving at 60 km/h
car.accelerate(); //Car speed increased to 90
