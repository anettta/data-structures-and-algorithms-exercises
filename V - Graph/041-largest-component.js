// Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
// The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
  let size = -Infinity;
  let visited = new Set();
  for (let node in graph) {
    let currentSize = explore(graph, node, visited);
    if (currentSize > size) {
      size = currentSize;
    }
  }
  return size;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return 0;
  visited.add(String(current));

  let size = 1;
  for (let neighbor of graph[current]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // -> 4
