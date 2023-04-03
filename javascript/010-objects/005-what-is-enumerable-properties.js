
/*


In JavaScript, an enumerable property is a property of an object
that can be iterated over in a for...in loop.
By default, all properties that are created on an object are
enumerable unless they are defined with the enumerable attribute set to false.


*/
*
const obj = {
  name: 'John',
  age: 30,
  country: 'USA'
};


for (let prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}

////////////// define a non-enumerable property ///////////

const obj = {};

Object.defineProperty(obj, 'myProperty', {
  value: 'Hello World!',
  enumerable: false
});

