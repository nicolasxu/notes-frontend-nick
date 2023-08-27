// todo


function permutation(str) {
  if (str.length === 1) {
    return [str]
  }

  if (str.length === 2) {
    return [str[0] + str[1], str[1] + str[0]]
  }

  const res = []
  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i]
    const firstSegment = [0, i ]
    const secondSegment = [i+1, str.length]
    const restChar = str.substring(0, i) + str.substring(i+1, str.length)
    const perms = permutation(restChar)
    for (let perm of perms) {
      res.push(thisChar + perm)
    }
  }
  return res
}



const input = 'abcd'
const res = permutation(input)
console.log(res)

// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']