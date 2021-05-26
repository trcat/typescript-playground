class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  fullName: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.fullName}`;
}

let user = new Student('Jane', 'M.', 'User');

document.body.textContent = greeter(user);
