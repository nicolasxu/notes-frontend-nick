
/*

If a promise rejection event is not handled by any handler,
it bubbles to the top of the call stack, and the host needs to surface it.
 On the web, whenever a promise is rejected, one of two events is sent to the
  global scope (generally, this is either the window or, if being used
  in a web worker, it's the Worker or other worker-based interface).


*/
*
unhandledrejection

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
