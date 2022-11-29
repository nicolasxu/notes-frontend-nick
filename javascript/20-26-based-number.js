function convert (n) {
	const res = []
	do {
		let reminder = n % 26
		if (reminder === 0) {
			res.push('Z')
			reminder = 26
		} else {
			res.push(reminder)
		}
		n = (n - reminder) / 26
		console.log('n:', n)
	} while(n > 0)
	return res.reverse()
}




const res = convert(27)
console.log(res)