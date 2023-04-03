

function greet(name) {
  console.log(`Hello, ${name}! age: ${this.age}`);
}

let g1 = greet

Reflect.apply(g1, {age: 10}, ['John']);

/*
diff: You don't need to know function name if you use Reflect.apply(), you can pass function name as variable
But you need to know function name if you use Function.prototype.apply()

*/

