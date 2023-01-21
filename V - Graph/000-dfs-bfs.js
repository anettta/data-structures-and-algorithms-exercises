// depth first search - iterative

// const dfsIterative = (graph, source) => {
//   let stack = [source];
//   let values = [];
//   while (stack.length > 0) {
//     let current = stack.pop();
//     values.push(current);
//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
//   return values;
// };

// depth first search - recursive

// const dfsRecursive = (graph, source) => {
//   for (let neighbor of graph[source]) {
//     dfsRecursive(graph, neighbor);
//   }
// };

// breadth first search - iterative

const bfsIterative = (graph, source) => {
  let values = [];
  let queue = [source];
  while (queue.length > 0) {
    let current = queue.shift();
    values.push(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return values;
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
