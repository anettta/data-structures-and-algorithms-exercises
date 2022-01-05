// Write a function, treeMinValue,
// that takes in the root of a binary tree
// that contains number values.
// The function should return the minimum value
// within the tree.
//
//You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const treeMinValue = (root) => {
//   if (root === null) return 0;
//   let min = Infinity;
//   let queue = [root];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     if (current.val < min) {
//       min = current.val;
//     }
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return min;
// };

const treeMinValue = (root) => {
  if (root === null) return Infinity;
  let left = treeMinValue(root.left);
  let right = treeMinValue(root.right);
  return Math.min(root.val, left, right);
};

// Time: O(n^2) BFS
// const treeMinValue = (root) => {
//   let queue = [root];
//   let min = Infinity;
//   while (queue.length > 0) {
//     let current = queue.shift(); // (O(n) because when you remove an element, you need to shift all the elements)
//     if (current.val < min) {
//       min = current.val;
//     }
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return min;
// };
// recursively below
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   const leftMin = treeMinValue(root.left);
//   const rightMin = treeMinValue(root.right);
//   return Math.min(root.val, leftMin, rightMin);
// };

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2
