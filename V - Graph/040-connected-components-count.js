// Write a function, connectedComponentsCount,
// that takes in the adjacency list of an undirected graph.
// The function should return the number of connected components within the graph.

const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};
const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

// const connectedComponentsCount = (graph) => {
//   let visited = new Set(); // O(1) lookup and addition
//   // visited set to prevent cycles
//   let count = 0;
//   for (let node in graph) {
//     if (explore(graph, node, visited) === true) {
//       count++;
//     }
//   }
//   return count;
// };
// const explore = (graph, current, visited) => {
//   if (visited.has(String(current))) return false;
//   visited.add(String(current));
//   for (let neighbor of graph[current]) {
//     explore(graph, neighbor, visited);
//   }
//   return true;
// };

// const connectedComponentsCount = (graph) => {
//   const visited = new Set();
//   let count = 0;
//   for (let node in graph) {
//     if (explore(graph, node, visited) === true) {
//       count++;
//     }
//   }
//   return count;
// };

// const explore = (graph, current, visited) => {
//   if (visited.has(String(current))) return false;
//   visited.add(String(current));
//   for (let neighbor of graph[current]) {
//     explore(graph, neighbor, visited);
//   }
//   return true;
// };

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
