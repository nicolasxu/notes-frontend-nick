

function throttle(fn, ms) {

  let inThrottle = false

  return function(...args) {

    if (inThrottle) {
      // do nothing, which is throttling...

    } else {
      // start timeout
      inThrottle = true
      setTimeout(() => {
        fn(...args)
        inThrottle = false
      }, ms)
    }
  }
}



const kk = throttle((sss) => {console.log(sss)}, 1500)
kk('fdsfds')
kk('fdsfds')



