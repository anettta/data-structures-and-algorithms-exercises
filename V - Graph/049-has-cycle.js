// Write a function, hasCycle, that takes in an object
// representing the adjacency list of a directed graph.
// The function should return a boolean indicating whether or not
// the graph contains a cycle.
//
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const hasCycle = (graph) => {
  const visiting = new Set();
  const visited = new Set();
  for (let node in graph) {
    if (cycleDetect(graph, node, visiting, visited) === true) {
      return true;
    }
  }
  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited) === true) {
      return true;
    }
  }
  visiting.delete(node);
  visited.add(node);

  return false;
};

console.log(
  hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
  })
); // -> true

console.log(
  hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
  })
); // -> false
