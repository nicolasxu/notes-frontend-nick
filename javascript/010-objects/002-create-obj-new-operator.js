


1. Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
2. Create an instance of the object with new.




function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);

////////////////////////////////

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);
