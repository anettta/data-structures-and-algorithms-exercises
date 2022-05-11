// Write a function 'treeValueCount' that takes in the root
// of a binary tree and a target value.
// The function should return the number of times
// that the target occurs in the tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeValueCount = (root, target) => {
  if (root === null) return null;
  let match = 0;
  if (root.val === target) {
    match = 1;
  }
  let left = treeValueCount(root.left, target);
  let right = treeValueCount(root.right, target);
  return match + left + right;

  // let count = 0;
  // let queue = [root];
  // if (root === null) return null;
  // while (queue.length > 0) {
  //   let current = queue.shift();
  //   if (current.val === target) {
  //     count++;
  //   }
  //   if (current.left) queue.push(current.left);
  //   if (current.right) queue.push(current.right);
  // }
  // return count;
};

// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let queue = [root];
//   let count = 0;
//   while (queue.length > 0) {
//     let current = queue.pop();
//     if (current.val === target) {
//       count++;
//     }
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return count;
// };

// const treeValueCount = (root, target, count = 0) => {
//   if (root === null) return 0;
//   const match = root.val === target ? 1 : 0;

//   return (
//     match +
//     treeValueCount(root.left, target) +
//     treeValueCount(root.right, target)
//   );
// };

// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let stack = [root];
//   let count = 0;
//   while (stack.length > 0) {
//     let current = stack.pop();
//     if (current.val === target) {
//       count++;
//     }
//     if (current.left !== null) stack.push(current.left);
//     if (current.right !== null) stack.push(current.right);
//   }
//   return count;
// };
// Time: O(n)
// Space: O(n)
// recursively
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   const match = root.val === target ? 1 : 0;
//   return (
//     match +
//     treeValueCount(root.left, target) +
//     treeValueCount(root.right, target)
//   );
// };

const a = new Node(12);
const b = new Node(4);
const c = new Node(4);
const d = new Node(4);
const e = new Node(4);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(treeValueCount(a, 1)); // -> 0
