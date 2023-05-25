// reverse the string using recursion


const str = "hello"

function solution(str) {
  if (str.length === 2) {
    return str[1] + str[0]
  }
  return str[str.length -1] + solution(str.substring(0, str.length - 1))
}


const res = solution(str)
const res2 = solution(res)
console.log(res2)