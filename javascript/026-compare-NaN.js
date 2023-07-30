
num = parseInt("fff")
console.log(num == NaN) // false

console.log("Object.is():", Object.is(num, NaN)) // true