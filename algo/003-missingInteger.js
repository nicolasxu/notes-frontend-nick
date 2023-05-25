/*

This is a demo task.

Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].

Copyright 2009–2023 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  const posIntSet = new Set()
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
        posIntSet.add(A[i])
    }
  }

  for (let i = 1; i <= posIntSet.size; i++) {
    if (!posIntSet.has(i)) {
        return i
    }
  }

  return posIntSet.size + 1

}

const input = [1, 3, 6, 4, 1, 2]
const res = solution(input)
console.log(res)

