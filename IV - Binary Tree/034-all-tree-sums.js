// Write a function, allTreePaths,
// that takes in the root of a binary tree.
// The function should return a 2-Dimensional array
//  where each subarray represents a root-to-leaf path
//  in the tree.
//
// The order within an individual path must start
//  at the root and end at the leaf,
// but the relative order of among paths
// in the outer array does not matter.
//
// You may assume that the input tree is non-empty.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];
  let paths = [];
  let leftPaths = allTreePaths(root.left);
  for (let path of leftPaths) {
    paths.push([root.val, ...path]);
  }
  let rightPaths = allTreePaths(root.right);
  for (let path of rightPaths) {
    paths.push([root.val, ...path]);
  }
  return paths;
};

// const allTreePaths = (root) => {
//   let result = allTreePathsHelper(root);
//   return result === null ? [] : result.reverse();
// };

// const allTreePathsHelper = (root) => {
//   if (root === null) return [];
//   if (root.left === null && root.right === null) {
//     return [[root.val]];
//   }
//   let paths = [];
//   let leftSubPaths = allTreePathsHelper(root.left);
//   let rightSubPaths = allTreePathsHelper(root.right);
//   for (let subPath of rightSubPaths) {
//     paths.unshift([root.val, ...subPath]);
//   }
//   for (let subPath of leftSubPaths) {
//     paths.unshift([root.val, ...subPath]);
//   }

//   return paths;
// };

// DFS recursive
// Time: ~O(n)
// Space: ~O(n)

// const allTreePaths = (root) => {
//   if (root === null) return [];
//   if (root.left == null && root.right == null) return [[root.val]];
//   let paths = [];
//   const leftSubPaths = allTreePaths(root.left);
//   for (let subPath of leftSubPaths) {
//     paths.push([root.val, ...subPath]); // another loop
//   }

//   const rightSubPaths = allTreePaths(root.right);
//   for (let subPath of rightSubPaths) {
//     paths.push([root.val, ...subPath]);
//   }
//   return paths;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
