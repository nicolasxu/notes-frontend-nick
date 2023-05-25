const arr = [1,2,3,4]


let i = 0
while(i < 10) {
  let front = arr.shift()
  console.log(front)
  arr.push(front)
  i++
}

