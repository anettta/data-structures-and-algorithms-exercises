// Write a function, shortestPath, that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB).
// The function should return the length
// of the shortest path between A and B.
// Consider the length as the number of edges in the path,
// not the number of nodes.
// If there is no path between A and B, then return -1.
//
// Time: O(e)  edges
// Space: O(e)  edges
//
//
//          a - c
//          |   |
//          b - d
//          |
//          f        h
//
//
// sp(a,d) =>  2 (edges)
// sp(a,h) => -1 (no path)

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const queue = [[nodeA, 0]];
  const visited = new Set([nodeA]);
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      if (visited.has([neighbor])) return -1;
      visited.add([neighbor]);
      queue.push([neighbor, distance + 1]);
    }
  }
  return -1;
};

const buildGraph = (edges) => {
  let graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
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
// console.log(buildGraph(edges));
console.log(shortestPath(edges, "w", "z")); // -> 2
