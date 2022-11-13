/*

Iterable protocol
An object is iterable when it contains a method called [Symbol.iterator] that takes no argument and returns an object which conforms to the iterator protocol.

The [Symbol.iterator] is one of the built-in well-known symbols in ES6.

https://www.javascripttutorial.net/es6/javascript-iterator/

 */

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}

/////////////////

interface IteratorResult2 {
  done: boolean;
  value: any;
}
interface Iterator2 {
  next(): IteratorResult2;
}
interface Iterable2 {
  [Symbol.iterator](): Iterator2
}



////////// example //////////
class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex <= this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
};


let evenNumbers = new Sequence(2, 10, 2);

for (const num of evenNumbers) {
    console.log(num);
}

2
4
6
8
10


//// you can manually loop through iterator ////
let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator]();

let result = iterator.next();

while( !result.done ) {
    console.log(result.value);
    result = iterator.next();
}


class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex <= this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            },
            return: () => {
                console.log('cleaning up...');
                return { value: undefined, done: true };
            }
        }
    }
}

let oddNumbers = new Sequence(1, 10, 2);

for (const num of oddNumbers) {
    if( num > 7 ) {
        break;
    }
    console.log(num);
}

1
3
5
7
cleaning up...

