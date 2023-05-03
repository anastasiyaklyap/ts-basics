const btnElem = document.querySelector('.sum-btn') as HTMLInputElement;
const numInput = document.querySelector('.num-input') as HTMLInputElement;

// function sum(a:number, b:number) {
//   console.log(a + b);
// }

// btnElem.addEventListener('click', () => { sum(5, +numInput.value) });

const persons: string[] = [];
function addPerson(firstName: string, lastName: string) {
  const name: string = firstName + lastName;
  persons.push(name);
}

let firstName: string = 'John';
let lastName: string = 'Doe';
let age: number = 18;

const person: {
  firstName: string;
  lastName: string;
} = {
  firstName,
  lastName,
};

addPerson(person.firstName, person.lastName);
addPerson('Amanda', 'Doe');
addPerson('Thomas', 'Jefferson');

enum Roles {
  Admin = 1,
  Moderator = 2,
  User = 3,
}

interface person {
  id: number | string;
  firstName: string;
  lastName: string;
  role: number;
}

const JohnDoe: person = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  role: Roles.Admin,
};

const AmandaDoe = {
  id: 2,
  firstName: 'John',
  lastName: 'Doe',
  role: Roles.Moderator,
};

const ThomasJefferson = {
  id: 'rwe5345sfst3453543',
  firstName: 'John',
  lastName: 'Doe',
  role: Roles.User,
};

const names: [string, string, string] = [
  JohnDoe.firstName,
  AmandaDoe.firstName,
  ThomasJefferson.firstName,
];
const JohnDoeSummary: [string, string, number] = [
  JohnDoe.firstName,
  JohnDoe.lastName,
  JohnDoe.role,
];

function join(valOne: string | number, valTwo: string | number) {
  if (typeof valOne === 'number' && typeof valTwo === 'number') {
    return valOne + valTwo;
  } else if (typeof valOne === 'string' && typeof valTwo === 'string') {
    return valOne + valTwo;
  } else {
    return false;
  }
}

function showMyName(name: string): void {
  console.log(name);
}

showMyName('John');

function square(a: number): number {
  return a * a;
}

square(10);

function sum(title: string, ...numbers: number[]): string {
  return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0);
}

sum('Numbers', 1, 6, 10);

const executeFunc = (
  func: (title: string, age: number, hobbies: string[]) => boolean
): void => {
  const title: string = 'Lorem Ipsum';
  func(title, 24, ['Sport', 'Movies', 'Soccer']);
};

executeFunc((title, age, hobbies) => {
  return true;
});
