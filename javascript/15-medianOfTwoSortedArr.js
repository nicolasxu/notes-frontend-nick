/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  let res = undefined
  const mergedArr = []
  const midIndex = Math.floor((len1 + len2)/2)
  console.log(midIndex)
  let index = 0
  let index1 = 0
  let index2 = 0
  while (index <= midIndex) {
    if (index1 === nums1.length) {
      mergedArr.push(nums2[index2])
      index2++
      index++
      continue
    }

    if (index2 === nums2.length) {
      mergedArr.push(nums1[index1])
      console.log(`pushing ${nums1[index1]} to mergedArr`)
      index1++
      index++
      continue
    }

    if (nums1[index1] <= nums2[index2]) {
      mergedArr.push(nums1[index1])
      index1++
    } else {
      mergedArr.push(nums2[index2])
      index2++
    }
    index++
  }

  if ((len1 + len2) % 2 === 0) {
    res = (mergedArr[midIndex] + mergedArr[midIndex -1]) /2
  } else {
    res = mergedArr[midIndex]
  }
  console.log(mergedArr)
  return res
  //

};




const res = findMedianSortedArrays([3,4], [])
console.log(res)