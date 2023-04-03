/*
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
providing a way to represent variadic functions in JavaScript.
*/



function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

////////////////////////////

function f(a, b, ...theArgs) {
  // …
}


///////////////////////////

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

/////////////////////////////

function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}


///////////////////////
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gives the first argument
}
