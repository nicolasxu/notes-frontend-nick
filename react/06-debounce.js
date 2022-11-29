

function debounce(func, duration) {

	let isInDebounce = false
	let timeOutHandle = null

	return function debouncedFunc() {

		if (isInDebounce) {
			clearTimeout(timeOutHandle)
			timeOutHandle = setTimeout(() => {
				isInDebounce = false
				func()
			}, duration)
		} else {
			isInDebounce = true
			timeOutHandle = setTimeout(() => {
				isInDebounce = false
				func()
			}, duration)
		}
	}
}

const kk = debounce(() => console.log('nick debounce'), 1000)

kk()
kk()