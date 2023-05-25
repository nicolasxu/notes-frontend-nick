// calculate the total of array using array method


const arr = [1,23,3,45,65,87,100]


function solution(arr) {
  return arr.reduce((a, c, i, arr) => {
    return a + c
  }, 0)

}


const res = solution(arr)
console.log(res)