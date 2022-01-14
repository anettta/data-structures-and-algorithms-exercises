// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size
// of the largest connected component in the graph.

const largestComponent = (graph) => {
  let visited = new Set();
  let largest = -Infinity;
  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (size > largest) {
      largest = size;
    }
  }
  return largest;
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

// const largestComponent = (graph) => {
//   let largest = 0;
//   let visited = new Set();

//   for (let node in graph) {
//     // iterate through the keys
//     const size = exploreSize(graph, node, visited);

//     if (size > largest) {
//       largest = size;
//     }
//   }
//   return largest;
// };
// const exploreSize = (graph, node, visited) => {
//   if (visited.has(node)) return 0;
//   visited.add(node);
//   let size = 1;

//   for (let neighbor of graph[node]) {
//     size += exploreSize(graph, neighbor, visited);
//   }
//   return size;
// };

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
