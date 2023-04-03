console.log(square(5)); // 25

function square(n) {
  return n * n;
}

// This code runs without any error, despite the square() function being called before it's declared.
// This is because the JavaScript interpreter hoists the entire function declaration to
// the top of the current scope, so the code above is equivalent to:

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25

///////////////////////////////////////

// The code below will not work.

console.log(square); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
