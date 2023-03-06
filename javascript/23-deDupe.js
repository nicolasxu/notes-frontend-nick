function removeDuplicate(arr) {


  return Array.from(new Set(arr))
}

const res = removeDuplicate([3,4,5,5])
console.log(res)