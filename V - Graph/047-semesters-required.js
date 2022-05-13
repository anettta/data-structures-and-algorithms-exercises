// Write a function, semestersRequired, that takes in a number of courses (n)
// and a list of prerequisites as arguments.
// Courses have ids ranging from 0 through n - 1.
// A single prerequisite of [A, B]
// means that course A must be taken before course B.
// Return the minimum number of semesters required
// to complete all n courses.
// There is no limit on how many courses you can take in a single semester,
// as long the prerequisites of a course are satisfied before taking it.
//
// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester.
// You must take A in some semester before B.
//
// You can assume that it is possible to eventually complete all courses.

const semestersRequired = (numOfCourses, prereqs) => {
  let graph = buildGraph(numOfCourses, prereqs);
  let distance = {};
  for (let course in graph) {
    if (graph[course].length === 0) {
      distance[course] = 1;
    }
  }
  for (let course in graph) {
    traverse(graph, course, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverse = (graph, course, distance) => {
  if (course in distance) return distance[course];
  let maxSemestersCount = 0;
  for (let neighbor of graph[course]) {
    let currentSemesterCount = traverse(graph, neighbor, distance);
    if (currentSemesterCount > maxSemestersCount)
      maxSemestersCount = currentSemesterCount;
  }
  distance[course] = 1 + maxSemestersCount;

  return distance[course];
};

const buildGraph = (numOfCourses, prereqs) => {
  let graph = {};

  for (let i = 0; i < numOfCourses; i++) {
    graph[i] = [];
  }
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }

  return graph;
};

// const semestersRequired = (numCourses, prereqs) => {
//   const graph = buildGraph(numCourses, prereqs);
//   const distance = {};
//   for (let node in graph) {
//     if (graph[node] === 0) {
//       distance[node] = 1;
//     }
//   }
//   for (let course = 0; course < numCourses; course++) {
//     traverseDistance(graph, course, distance);
//   }
//   return Math.max(...Object.values(distance));
// };

// const traverseDistance = (graph, node, distance) => {
//   if (node in distance) return distance[node];

//   let maxSemesters = 0;
//   for (let neighbor of graph[node]) {
//     const neighborSemesters = traverseDistance(graph, neighbor, distance);
//     if (neighborSemesters > maxSemesters) maxSemesters = neighborSemesters;
//   }
//   distance[node] = 1 + maxSemesters;
//   return distance[node];
// };

// const buildGraph = (numCourses, prereqs) => {
//   const graph = {};
//   for (let course = 0; course < numCourses; course++) {
//     graph[course] = [];
//   }
//   for (let prereq of prereqs) {
//     const [a, b] = prereq;
//     graph[a].push(b);
//   }
//   return graph;
// };

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(buildGraph(numCourses, prereqs));
console.log(semestersRequired(numCourses, prereqs)); // -> 3
