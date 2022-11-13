// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


function genSequence(limit) {
  res = []
  const nums = 4
  counter = 1
  for (let i = 0; i < limit; i++) {
    if (i < 4) {
      res.push(0)
    } else {
      const multiples = Math.floor( (i + 1) % (nums))
      if (multiples % 2 !== 0) {
        // ood
      } else {
        // even
      }
      res.push()
      counter++
      if (counter === 4) {

      }
    }
  }
}

var convert = function(s, numRows) {

  let rowIndex = 0
  let colIndex = 0
  const m = [[]]
  const inputs = s.split('')
  let rowStep = 1
  let colStep = 0
  let colCount = -1
  while(s.length) {

    const char = inputs

    m[rowIndex][colIndex] = char

    if (rowIndex === numRows - 1) {
      rowStep = -1

    }
    if (rowIndex === 0) {
      rowStep = 1
    }

    if (colIndex !== 0) {
      // skip
      colIndex = colIndex + colStep

    }

    rowIndex = rowIndex + rowStep

  }

};


const input = 'PAYPALISHIRING'

const res = convert(input, 4)
console.log(res)