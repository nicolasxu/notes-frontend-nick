The yield* operator is used to delegate to another iterable object, such as a Generator.

function* func1() {
  yield 42;
}

function* func2() {
  yield* func1();
}

const iterator = func2();

console.log(iterator.next().value);
// Expected output: 42


////////////// example /////////////

function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const gen = g2();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: undefined, done: true}

/////////////// example ///////////////
function* gen() {
  yield* ["a", "b", "c"];
}

