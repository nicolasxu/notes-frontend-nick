
interface Iterator  {
	next: () => {
		value: any
		done: boolean
	}
}

iterator is object which defines next method, the next method returns
{
	value: any,
	done: boolean
}

