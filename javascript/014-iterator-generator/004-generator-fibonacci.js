
function* fibonacci() {
	let current = 0
	let next = 1
	while(true) {
		const isReset = yield current
		const temp = current
		current = next
		next = next + temp
		// [current, next]= [next, next + current]

		if (isReset) {
			current = 0
			next = 1
		}
	}
}