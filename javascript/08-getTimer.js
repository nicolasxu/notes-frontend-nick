
// '2022-11-01T03:44:23.791Z'
function getTimer(isoDateStr) {
	const d1 = new Date(isoDateStr).getTime()
	const d2 = new Date().getTime()
	console.log(d2 - d1)
}


getTimer('2022-11-01T03:44:23.791Z')