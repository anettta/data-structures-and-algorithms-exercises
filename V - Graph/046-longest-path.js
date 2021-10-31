// Write a function, longestPath,
// that takes in an adjacency list
// for a directed acyclic graph.
// The function should return the length
// of the longest path within the graph.
// A path may start and end at any two nodes.
// The length of a path is considered
// the number of edges in the path,
// not the number of nodes.

const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};

console.log(longestPath(graph)); // -> 2
