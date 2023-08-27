
// refer to the 001-basics.js

function funcA() {
  setTimeout( () => console.log("hello funcA"), 0)
}

async function funcB() {
  new Promise((resolve, reject) => {
    console.log('funcB')
    resolve()
  })
  .then(() => {
    console.log('then in funcB')
    return Promise.resolve()
  })
  .then(() => {
    console.log('3rd func in funcB')
    return Promise.resolve()
  })
  .then(() => {
    console.log('4th func in funcB')
  })

}

async function funcC() {
  new Promise((resolve, reject) => {
    console.log('funcC')
    resolve()
  })
  .then(() => {
    console.log('then in funcC')
  })

}


console.log("begin")
funcA()
funcB()
funcC()
console.log("end")


/*
1. "begin"
2. "funcB"
3. "funC"
4. "end"
5. "then in funcB"
6. "then in funcC"
7. hello funcA




*/