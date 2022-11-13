/**
 * @param {string} s
 * @return {number}
 */

const symbolIntDict = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000,
}


var romanToInt = function(s) {

  const arr = s.split('')
  let res = 0
  while(arr.length) {

    const currentChar = arr.shift()
    const currVal = symbolIntDict[currentChar]
    if (arr.length) {
      // still have chars left
      const nextChar = arr[0] // peek into the next char, not shifting
      const nextVal = symbolIntDict[nextChar]

      if (nextVal <= currVal) {
        res = res + currVal
        continue
      } else {
        arr.shift() // process next char along with current num, do shifting
        res = res + nextVal - currVal
      }
    } else {
      res = res + currVal
    }
  }
  return res
};


const res = romanToInt("MCMXCIV") // 1994
1000 + 100 + (1000 - 10) + 100 + 100 + 4
console.log(res)