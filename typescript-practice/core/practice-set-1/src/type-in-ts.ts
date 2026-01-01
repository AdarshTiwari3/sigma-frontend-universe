type User = {
  name: string;
  age: number;
};

function displayUser(user: User) {
  console.log(`Hello ${user.name}, you are ${user.age} years old`);
}

const user1: User = {
  name: "John doe",
  age: 22,
};

displayUser(user1); //Hello John doe, you are 22 years old
