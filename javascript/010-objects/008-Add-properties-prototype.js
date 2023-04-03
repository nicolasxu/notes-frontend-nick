function Car(name) {
	this.name = name

}
let car1 = new Car("john")

Car.prototype.color = "red";
console.log(car1.color); // "red"
