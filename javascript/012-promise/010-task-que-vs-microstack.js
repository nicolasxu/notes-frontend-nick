Promise callbacks are handled as a microtask whereas setTimeout() callbacks are handled as task queues.

const promise = new Promise((resolve, reject) => {
  console.log("Promise callback");
  resolve();
}).then((result) => {
  console.log("Promise callback (.then)");
});

setTimeout(() => {
  console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
