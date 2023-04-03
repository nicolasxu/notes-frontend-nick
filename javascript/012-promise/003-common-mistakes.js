// Bad example! Spot 3 mistakes!

doSomething()
  .then(function (result) {
    // Forgot to return promise from inner chain + unnecessary nesting
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourthThing());
// Forgot to terminate chain with a catch!

// This means doFourthThing() won't wait for doSomethingElse() or doThirdThing() to finish