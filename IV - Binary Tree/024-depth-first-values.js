// Write a function, depthFirstValues,
// that takes in the root of a binary tree.
// The function should return an array
// containing all values of the tree
// in depth-first order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//
// recursive solution
//
const depthFirstValues = (root) => {
  if (root === null) return [];

  let left = depthFirstValues(root.left);
  let right = depthFirstValues(root.right);
  let values = [];
  values.push(root.val, ...left, ...right);
  return values;
};

// iterative solution
//
// const depthFirstValues = (root) => {
//   if (root === null) return null;
//   let stack = [root];
//   let values = [];
//   while (stack.length > 0) {
//     let current = stack.pop();
//     values.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return values;
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

console.log(depthFirstValues(a));
