// Write a function, longestPath,
// that takes in an adjacency list
// for a directed acyclic graph.
// The function should return the length
// of the longest path within the graph.
// A path may start and end at any two nodes.
// The length of a path is considered
// the number of edges in the path,
// not the number of nodes.

const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0; // 0 edges away from themselves
    }
  }
  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }
  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let max = 0;
  for (let neighbor of graph[node]) {
    let attemptLength = traverseDistance(graph, neighbor, distance);
    if (attemptLength > max) {
      max = attemptLength;
    }
  }
  distance[node] = 1 + max;
  return distance[node];
};

const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};

console.log(longestPath(graph)); // -> 2
