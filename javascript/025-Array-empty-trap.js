

let ss = new Array(5).map(() => 'ok')
console.log(JSON.stringify(ss))
// [null,null,null,null,null]
// it is still empty array.
// So don't call map() on empty array


let pp = new Array(5).fill(0).map(()=> 'ok')
console.log(pp)
// ['ok', 'ok', 'ok', 'ok', 'ok']
// must call fill function before calling map, or map funciton
// result will not be set
