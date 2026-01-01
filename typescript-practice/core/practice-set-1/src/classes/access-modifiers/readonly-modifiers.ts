// readonly modifier, it may be public but it will not allow to be changed or it will be readonly

class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id; //  allowed (initialization)
  }
}

const user = new User(101);
console.log(user.id); //101

// user.id = 200; not allowed to assign other values as it is read only
// A readonly property(method) cannot be reassigned anywhere after initialization
