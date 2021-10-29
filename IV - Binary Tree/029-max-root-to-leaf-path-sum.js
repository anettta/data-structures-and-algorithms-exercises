// Write a function, maxPathSum,
// that takes in the root of a binary tree
// that contains number values.
// The function should return the maximum sum of any root
// to leaf path within the tree.
//
// You may assume that the input tree is non-empty.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Time: O(n)
// Space: O(n)
// iterative DFS
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  let max = -Infinity;
  let stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    let current = stack.pop();
    sum += current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  if (sum > max) {
    max = sum;
  }
  return max; // 21 wrong answer
};
// recursive DFS
//
// const maxPathSum = (root) => {
//   if (root === null) return -Infinity;
//   if (root.left === null && root.right === null) return root.val;
//   let left = maxPathSum(root.left);
//   let right = maxPathSum(root.right);
//   return root.val + Math.max(left, right);
// };
//

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

console.log(maxPathSum(a)); // -> 18
