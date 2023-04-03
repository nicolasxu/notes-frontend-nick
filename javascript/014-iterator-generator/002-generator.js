// generator create an iterable object

function* makeIterator() {
  yield 1;
  yield 2;
}

const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true



/////////////////

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};


///////////////////////////////////

const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};


/////////////////////
String, Array, TypedArray, Map and Set

// Create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;


