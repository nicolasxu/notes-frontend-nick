
There are four composition tools for running asynchronous operations concurrently

Promise.all(),

			Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
			  // use result1, result2 and result3
			});
			If one of the promises in the array rejects, Promise.all() immediately rejects the returned promise and aborts the other operations.



Promise.allSettled(),

		Promise.allSettled() is another composition tool that ensures all operations are complete before resolving.


Promise.any([...]), and // only 1st resolved promise will resolve
Promise.race([...]). // reject promise will resolve

So, in summary, Promise.race() resolves as soon as any of the Promises in the iterable resolves or rejects, while Promise.any() resolves as soon as any of the Promises in the iterable fulfills.



