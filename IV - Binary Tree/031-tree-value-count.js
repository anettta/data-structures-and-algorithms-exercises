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

// recursive solution

const treeValueCount = (root, target) => {
  if (root === null) return 0;

  let match = root.val === target ? 1 : 0;
  let sum =
    treeValueCount(root.left, target) + treeValueCount(root.right, target);
  return sum + match;
};

//
// iterative solution using queue
//
// const treeValueCount = (root, target) => {
//   let queue = [root];
//   let count = 0;
//   while (queue.length > 0) {
//     let current = queue.shift();
//     if (current.val === target) {
//       count++;
//     }
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return count;
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

console.log(treeValueCount(a, 4)); // -> 0
