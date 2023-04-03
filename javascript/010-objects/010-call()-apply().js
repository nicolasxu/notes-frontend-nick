


Function.prototype.apply() // take args as seperated by comma
Function.prototype.call()  // take argument as array


function greet(name1, name2) {
	console.log('hello ' + name1 + ' ' + name2 + ' at ' + this.location)

}

greet.call({location: 'school'}, 'nick', 'john')


function greet2(...names) {
	console.log('hello ' + names.join(' ') + ' at ' + this.location)
}
greet2.apply({location: 'park'}, ['nick', 'john'])