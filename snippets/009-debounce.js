

function debounce(fn, ms) {

  let isInDebounce = false
  let timeoutId = null

  return function (...args) {

    if (isInDebounce) {
      // restart timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          fn(...args)
          isInDebounce = true
          timeoutId = null
        }, ms)
      }
      // set flag
    } else {
      // start timeout
      isInDebounce = true
      timeoutId = setTimeout(() => {
        fn(...args)
        isInDebounce = false
        timeoutId = null
      }, ms)
    }
  }
}

const kk = debounce((kkk) => {console.log(kkk)}, 1500)
kk('nick')
setTimeout(() => {kk('nick')}, 1000)
setTimeout(() => {kk('nick')}, 1000)
setTimeout(() => {kk('nick')}, 1000)