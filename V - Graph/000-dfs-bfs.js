// depth first search - iterative

const dfsIterative = (graph, source) => {
  let stack = [source];

  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

// depth first search - recursive

const dfsRecursive = (graph, source) => {
  let stack = [source];
  let current = stack.pop();
  console.log(current);
  for (let neighbour of graph[current]) {
    dfsRecursive(graph, neighbour);
  }
};

// breadth first search - iterative

const bfsIterative = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

// graph

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// console.log(dfsIterative(graph, "a"));

// console.log(dfsRecursive(graph, "a"));

console.log(bfsIterative(graph, "a"));
