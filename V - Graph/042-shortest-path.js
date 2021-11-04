// Write a function, shortestPath,
// that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB).
// The function should return the length
// of the shortest path between A and B.
// Consider the length as the number of edges in the path,
// not the number of nodes.
// If there is no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // breadth first traversal is better
  // explore all directions very evenly
  // queue
  let visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    // graph[node] is an individual array within adjacency list
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    // iterating through every edge
    let [a, b] = edge;
    if (!(a in graph)) graph[a] = []; // create for the first time
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2
