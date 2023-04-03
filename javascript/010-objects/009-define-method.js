objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
};


// Methods are typically defined on the prototype object of the constructor,
// so that all objects of the same type share the same method.

Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};

car1.displayCar();
car2.displayCar();

///////////////////////////

const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone


Function.prototype.call() or Reflect.apply(), you can explicitly pass the value of this as an argument


