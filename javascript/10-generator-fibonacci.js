let fibonacci = {
	[Symbol.iterator]: function* () {
		let pre = 0
		let cur = 1
		while(true) {
			const temp = pre + cur
			pre = cur
			cur = temp
			yield cur
		}

	}
}

// for (let f of fibonacci) {
// 	console.log(f)
// 	if (f > 200) {
// 		break
// 	}
// }


function* fibo2() {
	let pre = 0
	let cur = 1
	while(true) {
		const temp = pre + cur
		pre = cur
		cur = temp
		reset = yield cur
		if (reset) {
			cur = 1
			pre = 0
		}
	}
}

const f = fibo2()
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next(true).value)





