
async function promiseAll(promises) {

	const allRes = {}



	return new Promise((resolve, reject) => {

		promises.forEach(async (p, index) => {
			try {
				const eachRes = await p
				allRes[index] = eachRes
				if (Object.keys(allRes).length === promises.length) {
					resolve(allRes)
					// will need to convert back to array
				}
			} catch(e) {
				reject(e)
			}
		})
	})
}

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo1");
  }, 300);
});


const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo2");
  }, 300);
});

promiseAll([myPromise1, myPromise2]).then((res) => {
	console.log(res)
})


