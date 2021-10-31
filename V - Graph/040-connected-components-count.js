// Write a function, connectedComponentsCount,
// that takes in the adjacency list of an undirected graph.
// The function should return the number of connected components within the graph.

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2
