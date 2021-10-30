// Write a function, hasPath, that takes in an object
// representing the adjacency list of a directed acyclic graph
// and two nodes (src, dst).
// The function should return a boolean
// indicating whether or not there exists a directed path
//  between the source and destination nodes.

// Iterative DFS
const hasPath = (graph, src, dst) => {
  let stack = [src];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dst) {
      return true;
    }
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// Recursive DFS
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "k")); // true
