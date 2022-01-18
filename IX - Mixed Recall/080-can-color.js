const canColor = (graph) => {
  const coloring = {};

  for (let node in graph) {
    if (!(node in coloring)) {
      if (!validate(graph, node, coloring, false)) {
        return false;
      }
    }
  }
  return true;
};

const validate = (graph, node, coloring, currentColor) => {
  if (node in coloring) return coloring[node] === currentColor;
  coloring[node] = currentColor;
  for (let neighbor in graph[node]) {
    if (!validate(graph, neighbor, coloring, !currentColor)) {
      return false;
    }
  }
  return true;
};

const graph = {
  a: ["b"],
  b: ["c", "e"],
  c: ["e"],
  e: ["b"],
};

// a -> b -> c -> e

console.log(canColor(graph));
