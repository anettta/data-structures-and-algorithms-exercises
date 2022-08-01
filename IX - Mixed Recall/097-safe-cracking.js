const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  return topologicalOrder(graph);
};

const topologicalOrder = (graph) => {
  let safe = {};
  for (let key in graph) {
    safe[key] = 0;
  }

  for (let key in graph) {
    for (let value of graph[key]) {
      safe[value]++;
    }
  }

  let stack = [];
  for (let key in safe) {
    if (safe[key] === 0) {
      stack.push(key);
    }
  }

  let code = "";

  while (stack.length > 0) {
    let current = stack.pop();
    code += current;
    for (let value of graph[current]) {
      safe[value]--;
      if (safe[value] === 0) {
        stack.push(value);
      }
    }
  }

  return code;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  }
  return graph;
};

const edges = [
  [7, 1],
  [1, 8],
  [7, 8],
];
console.log(buildGraph(edges));

console.log(
  safeCracking([
    [7, 1],
    [1, 8],
    [7, 8],
  ])
);
("718");

console.log(
  safeCracking([
    [3, 1],
    [4, 7],
    [5, 9],
    [4, 3],
    [7, 3],
    [3, 5],
    [9, 1],
  ])
);
("473591");
