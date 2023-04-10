// const person = {
//   name: 'Sammy Musyoki',
//   age: 30,
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and am ${this.age} years old.`);
  }
}

// module.exports = Person;

const Person = require('./person');

// console.log(person.name);

const person1 = new Person('Faith Melisi', 30);

person1.greeting();
