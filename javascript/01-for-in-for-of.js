// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements
//
//
//


// for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.


let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}
