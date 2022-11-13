

function throttle(func, duration) {

	let isInThrottle = false
	let timeOutHandle = null
	return function throttledFunc() {
		if (!isInThrottle) {

			isInThrottle = true
			timeOutHandle = setTimeout(() => {
				func()
				isInThrottle = false
			}, duration)
		} else {
			clearTimeout(timeOutHandle)
			timeOutHandle = setTimeout(() => {
				isInThrottle = false
				func()
			}, duration)
		}
	}

}


const kk = throttle(() => console.log('nick'), 1000)
kk()
kk()
kk()
