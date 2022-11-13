

// ABAZDC, BACBAD => ABAD
// aaaa, aa => aa
function getLongestSubSequence(str1, str2) {
	const res = {}
	for (let i = 0; i < str1.length; i++) {
		res[str1[i]+ '-' + i] = []
		for (let j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {

				for (let t = 0; t < str1.length; t++) {

					if (res[str1[t] + '-' + t]) {
						if (res[str1[t] + '-' + t].length === 0 || res[str1[t] + '-' + t][res[str1[t] + '-' + t].length -1].index < j) {
							console.log({index: j, val: str2[j]})
							res[str1[t] + '-' + t].push({index: j, val: str2[j] })
						}
					}

				}

			}
		}
	}

	console.log(res)

}

getLongestSubSequence('ABAZDC', 'BACBAD')
getLongestSubSequence('aaaa', 'aa')