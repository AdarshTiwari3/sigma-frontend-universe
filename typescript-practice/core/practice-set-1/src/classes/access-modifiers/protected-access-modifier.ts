// Protected in TS

class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  protected increaseSpeed(amount: number): void {
    this.speed += amount;
  }
}

class Car extends Vehicle {
  accelerate(): void {
    this.increaseSpeed(20); // allowed (subclass)
    console.log(`Car speed: ${this.speed}`);
  }
}

class Bike extends Vehicle {
  accelerate(): void {
    this.increaseSpeed(10); //allowed
    console.log(`Bike speed: ${this.speed}`);
  }
}

const car = new Car(50);
car.accelerate(); // Car speed: 70

const bike = new Bike(30);
bike.accelerate(); // Bike speed: 40

// car.speed
//  Error (protected)
// car.increaseSpeed(10)  Error
