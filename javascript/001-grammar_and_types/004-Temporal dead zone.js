//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz

/*

A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until
code execution reaches the line where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value,
and any attempt to access it will result in a ReferenceError.

temporal deam is referencing to the var key word "hoist" concept, meaning no hoist.

*/

{
  // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}

////////////////////////////////

/*

The term "temporal" is used because the zone depends on the order of execution (time)
rather than the order in which the code is written (position).

*/
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}

//////////// example //////////////////////

// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;

//////////////////////////////////
/* TDZ combined with lexical scoping */
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();


///////////////////////////////////

function go(n) {
  // n here is defined!
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });

/////////////////////////////////////

var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

////////////////////////////////////


let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}

///////////////////////////////////






















