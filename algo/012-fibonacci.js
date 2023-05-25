
// get the Nth fibonacci number, n is index

//  0, 1, 1, 2, 3, 5, 8, 13


function fibonacci(n) {
  if (n === 0) {
    return 0
  }

  let prev = 0
  let curr = 1

  for(let i = 1; i < n; i++) {
    const temp = prev + curr
    prev = curr
    curr = temp
    console.log(i)
  }
  return curr
}

const res = fibonacci(3)
console.log('fib:', res)