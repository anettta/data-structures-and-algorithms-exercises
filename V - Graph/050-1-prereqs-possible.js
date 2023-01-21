// Write a function, prereqsPossible,
//  that takes in a number of courses (n)
// and prerequisites as arguments.
// Courses have ids ranging from 0 through n - 1.
// A single prerequisite of [A, B] means that course A must be taken before course B.
// The function should return a boolean indicating whether or not it is possible to complete all courses.
//
// p = number of prereqs
// n = number of courses
// Time: O(p)
// Space: O(n)
const prereqsPossible = (numCourses, prereqs) => {
  const visiting = new Set();
  const visited = new Set();

  const graph = buildGraph(numCourses, prereqs);
  for (let node in graph) {
    if (hasCycle(graph, node, visiting, visited)) {
      return false; // cycle found
    }
  }
  return true;
};

const hasCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);
  for (let neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }
  visiting.delete(node);
  visited.add(node);
  return false;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let course = 0; course < numCourses; course++) {
    graph[course] = [];
  }
  for (let prereq of prereqs) {
    const [courseA, courseB] = prereq;
    graph[courseA].push(String(courseB));
  }
  return graph;
};

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> true
