exec()  Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test()  Tests for a match in a string. It returns true or false.
match()   Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll()  Returns an iterator containing all of the matches, including capturing groups.
search()  Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace()   Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
replaceAll()  Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
split()   Uses a regular expression or a fixed string to break a string into an array of substrings.




const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}


/////////////////////////

const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// Expected output: true

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 9

console.log(globalRegex.test(str));
// Expected output: false


////////////////////////////////

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

////////////////////////////////
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

/////////////////////////////////

const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");



