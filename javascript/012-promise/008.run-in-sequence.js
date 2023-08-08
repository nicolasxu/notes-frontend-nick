[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });


In this example, we reduce an array of asynchronous functions down to a promise chain.


The code above is equivalent to:

Promise.3)
  .then((result3) => {
    /* use result3 */
  });resolve()
  .then(func1)
  .then(func2)
  .then(func


This can be made into a reusable compose function, which is common in functional programming:

const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));

The composeAsync() function accepts any number of functions as arguments and returns a new function
that accepts an initial value to be passed through the composition pipeline:

const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);


/////////////////////

Sequential composition can also be done more succinctly with async/await:

let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */


