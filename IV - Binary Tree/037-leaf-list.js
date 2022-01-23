// Write a function, leafList,
// that takes in the root of a binary tree
// and returns an array containing the values of all leaf nodes
// in left-to-right order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafList = (root, leaves = []) => {
  if (root === null) return;

  if (root.left === null && root.right === null) {
    leaves.push(root.val);
  }
  leafList(root.left, leaves);
  leafList(root.right, leaves);
  return leaves;
};

// const leafList = (root) => {
//   if (root === null) return [];
//   const stack = [root];
//   const leaves = [];
//   while (stack.length > 0) {
//     let current = stack.pop();
//     if (current.left === null && current.right === null) {
//       leaves.push(current.val);
//     }
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return leaves;
// };

// recursive
// const leafList = (root) => {
//   if (root === null) return [];
//   const leaves = [];
//   fillLeaves(root, leaves);
//   return leaves;
// };

// const fillLeaves = (root, leaves) => {
//   if (root === null) return;
//   if (root.left === null && root.right === null) leaves.push(root.val);
//   fillLeaves(root.left, leaves);
//   fillLeaves(root.right, leaves);
// };

// iterative
// const leafList = (root) => {
//   if (root === null) return [];
//   let leaves = [];
//   let stack = [root];
//   while (stack.length) {
//     let current = stack.pop();

//     if (current.left === null && current.right === null) {
//       leaves.push(current.val);
//     }
//     if (current.right !== null) stack.push(current.right);
//     if (current.left !== null) stack.push(current.left);
//   }
//   return leaves;
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

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ]
