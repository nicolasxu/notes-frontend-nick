Some JavaScript objects, such as the NodeList returned by
document.getElementsByTagName() or the arguments object made
available within the body of a function, look and behave like
arrays on the surface but do not share all of their methods.

function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}



////////////////////

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"

// so you can do this
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}

///////////////////////
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});


