// write a function, topologicalOrder, that takes in an object
// representing an adjacency list for a directed-acyclic graph.
//
// the function should return an array containing the topological order of the graph.
//
// the topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.

const topologicalOrder = (graph) => {
  let numParents = {};
  for (let node in graph) {
    numParents[node] = 0;
  }

  for (let node in graph) {
    for (let child of graph[node]) {
      numParents[child]++;
    }
  }
  let stack = [];
  for (let node in numParents) {
    if (numParents[node] === 0) {
      stack.push(node);
    }
  }

  let order = [];

  while (stack.length > 0) {
    let current = stack.pop();
    order.push(current);

    for (let child of graph[current]) {
      numParents[child]--;
      if (numParents[child] === 0) {
        stack.push(child);
      }
    }
  }

  return order;
};

const graph = {
  a: ["f"],
  b: ["d"],
  c: ["a", "f"],
  d: ["e"],
  e: [],
  f: ["b", "e"],
};

console.log(topologicalOrder(graph)); // c,a,f,b,d,e
