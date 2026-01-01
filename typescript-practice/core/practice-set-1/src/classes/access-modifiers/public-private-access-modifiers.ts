// Access Modifiers in Typescript- Public(default), private, and protected

//public

class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Ranzo");
console.log("name=", p.name); // name= Ranzo

// private
class Employee {
  private emp_id: string;

  constructor(emp_id: string) {
    this.emp_id = emp_id;
  }

  showId() {
    console.log("Emp_id=", this.emp_id); //allowed
  }
}

const emp = new Employee("123");
emp.showId(); //Emp_id= 123
// emp.emp_id not accessible
