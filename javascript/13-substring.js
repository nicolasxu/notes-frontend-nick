
// list all possible substring of a string
//



function getAllSubstrings(str) {
  var i, j, result = [];
  let max = 0
  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {

      	const temp = str.substring(i, j);
      	if (new Set(temp).size === temp.length) {
      		if (temp.length > max ) {
      			max = temp.length
      		}
      	}





      }
  }
  return max;
}

var theString = 'abcabcbb';
console.log(getAllSubstrings(theString));