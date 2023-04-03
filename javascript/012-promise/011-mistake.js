function doSomething(callback) {
  // mistake
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
// the callback may be called synchronously or asynchronously
//



Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
Instead of running immediately, the passed-in function is put
on a microtask queue, which means it runs later
(only after the function which created it exits,
 and when the JavaScript execution stack is empty),
just before control is returned to the event loop





//////////////////

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

