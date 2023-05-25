

const arr = [1,2,3,4,5,6,6,6,6,8, 100, 1000]

// return index
function binarySearch (arr, val) {
  // iterative

  let start = 0
  let end = arr.length - 1

  while (start <= end) {

    const midIndex = Math.floor((start + end) / 2 )
    const midVal = arr[midIndex]
    if (midVal === val) {
      return midIndex
    }

    if (val < midVal) {
      end = midIndex - 1
    } else {
      // bigger
      start = midIndex + 1
    }
  }
  return -1
}

const res = binarySearch(arr, 1)
console.log('res', res)


function binarySearchRecursive(arr, val, start, end) {
  if (start > end) {
    return -1
  }

  const midIndex = Math.floor((start + end) / 2)
  const midVal = arr[midIndex]
  if (midVal === val) {
    return midIndex
  }

  if (val < midVal) {
    return binarySearchRecursive(arr, val, start, midIndex - 1)
  } else {
    // bigger
    return binarySearchRecursive(arr, val, midIndex + 1, end)
  }

}

const recursiveRes = binarySearchRecursive(arr, 1, 0, arr.length - 1)
console.log('recursiveRes', recursiveRes)