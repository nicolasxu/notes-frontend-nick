class MyClass {
  constructor() {
    this.luckyNumber = Math.random(); // better
  }
}


// same as

class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
