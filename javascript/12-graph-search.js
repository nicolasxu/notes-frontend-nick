

// Adjacency list to represent a graph in JS

const graph = {
	a: ['b', 'c'],
	b: ['d', 'e'],
	c: [],
	d: [],
	e: ['f'],
	f: []
}





// recursive breadth first search
//
function bfs_resursive(graph, startNode) {

	for (let node of graph[startNode]) {
		console.log(node)

	}
	for (let child of graph[startNode]) {
		bfs_resursive(graph, child)
	}

}

bfs_resursive(graph, 'a')