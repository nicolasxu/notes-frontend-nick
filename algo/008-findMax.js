// find max number in array

const arr = [1,3,4,5,6,7,8,111]

function findMax(arr) {
  // method 1, loop through
  // ...

  // method 2
  return Math.max(...arr)
  // pay attention to the ...
  // it convert the array into position based params, which Math.max can take
}

const res = findMax(arr)
console.log(res)