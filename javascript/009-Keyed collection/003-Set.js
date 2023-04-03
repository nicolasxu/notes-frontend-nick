// Set objects store unique values. You don't have to manually keep track of duplicates.

const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"


/////////////////////////////
Array.from(mySet);
[...mySet2];

///////////////////////////////
mySet2 = new Set([1, 2, 3, 4]);