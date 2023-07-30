const controller = AbortController()
const signal = controller.signal

setTimeout(() => {
  controller.abort('time out')
}, 5000)

try {
  fetch('/article/fetch-abort/demo/hang', {signal})
} catch( e) {
  if (e.name = 'AbortError') {
    console.log('aborted...')
  } else {
    throw e
  }
}