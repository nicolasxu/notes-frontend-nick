// iterates over all the enumerable properties of an object


for (variable in object)
  statement


function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

// if you use above func over an array, it will loop through the index, not value.
//