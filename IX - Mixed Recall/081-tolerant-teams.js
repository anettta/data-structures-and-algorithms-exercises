const tolerandTeams = (edges) => {
  let graph = buildGraph(edges);

  const coloring = {};

  for (let node in graph) {
    if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
      return false;
    }
  }
  return true;
};

const isBipartite = (graph, node, coloring, currentColor) => {
  if (node in coloring) {
    return coloring[node] === currentColor;
  }
  coloring[node] = currentColor;

  for (let neighbor of graph[node]) {
    if (!isBipartite(graph, neighbor, coloring, !currentColor)) {
      return false;
    }
  }
  return true;
};

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

let edges = [
  ["philip", "seb"],
  ["raj", "nader"],
];

// a -> b -> c -> e

console.log(tolerandTeams(edges));
