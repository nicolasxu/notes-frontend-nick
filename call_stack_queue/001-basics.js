https://www.jsv9000.app/


//  Try is visulizer

/*
1. call stack
2. task queue
3. microtask queue

*/


function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();
