
1. Enumerable properties are properties of an object that can be enumerated or iterated over using a for...in loop
   use
    const obj = {};
		Object.defineProperty(obj, 'myProperty', {
		  value: 'Hello World!',
		  enumerable: false
		});
	 to make it not enumerable.


const obj = { a: 1, b: 2, c: 3 };

for (let prop in obj) {
  console.log(prop); // output: a, b, c
}

2. Iterable properties, are properties of an object that can be iterated over using a for...of loop.
   must have a property named Symbol.iterator defined.

const myIterableObj = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let value of myIterableObj) {
  console.log(value); // output: 1, 2, 3
}


/*

Enumerable properties can be iterated over using a for...in loop,
while iterable properties can be iterated over using a for...of loop,

*/


//////////////// example of Object.defineProperties() //////

const obj = {};

Object.defineProperties(obj, {
  property1: {
    value: 'Hello',
    writable: false
  },
  property2: {
    value: 'World',
    writable: false
  },
  property3: {
    get: function() {
      return this.property1 + ' ' + this.property2;
    }
  }
});

console.log(obj.property3); // output: "Hello World"
obj.property1 = 'Hola';
console.log(obj.property3); // output: "Hello World"
