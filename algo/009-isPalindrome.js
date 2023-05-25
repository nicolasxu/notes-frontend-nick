// check if string is palindrome


const str = "abba"

function isPalindrome(str) {
  const midIndex = Math.floor(str.length / 2)
  for(let i = 0; i <= midIndex; i++) {
    if (str[i] !== str[str.length - i -1]) {
      return false
    }
  }
  return true
}


const res = isPalindrome(str)

console.log(res)