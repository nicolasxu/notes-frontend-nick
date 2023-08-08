// calculate the total of array using array method


const arr = [1,23,3,45,65,87,100]


function solution(arr) {
  return arr.reduce((a, v, i, arr) => {
    return a + v
  }, 0)

}


const res = solution(arr)
console.log(res)