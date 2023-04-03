
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());
// Expected output (in a browser): true


////////////////////////////

Writable 	yes
Enumerable 	no
Configurable 	yes

////////////////////////////
const prevGt = globalThis
globalThis = "nick"
console.log(globalThis) // "nick"
