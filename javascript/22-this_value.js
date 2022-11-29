
const object = {
	x: 10,
	getX() {
		function inner() {
			console.log(this.x)
		}
		console.log(this)
		inner()
	}
}



object.getX()


// 1. objext
// 2. undefined
//