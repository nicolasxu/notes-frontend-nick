
const arr = [1,2,3,4,5]

for (let i = 0; i < arr.length * 2; i++) {
  console.log(arr[i % arr.length])
}

/*
1
2
3
4
5
1
2
3
4
5
*/