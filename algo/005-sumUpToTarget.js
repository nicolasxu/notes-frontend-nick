const nums = [2, 7, 11, 15]
const target = 9
// https://www.youtube.com/shorts/y4hQsaalCT8
// return 2 index in arr whose value sum up to target



function solution(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (map.has(complement)) {
      return [i, map.get(complement)]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}

const res = solution(nums, target)
console.log(res)