
const arr = [ 7, 8, 9, 0, 3, 4, 5, 6,9, 10, 11, 12, -1]


function quickSort(arr) {

  if (arr.length <= 1) {
    return arr
  }

  const midIndex = Math.floor(arr.length / 2)
  const midVal = arr[midIndex]
  const less = []
  const more = []
  const equal = []
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < midVal) {
      // smaller

      less.push(arr[i])
    } else if (arr[i] > midVal) {
      // bigger

      more.push(arr[i])

    } else {
      // equal
      equal.push(arr[i])
    }
  }

  return quickSort(less).concat(equal).concat(quickSort(more))
}

const res = quickSort(arr)
console.log(res)

