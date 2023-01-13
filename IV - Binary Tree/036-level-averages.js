// Write a function, levelAverages,
//  that takes in the root of a binary tree
// that contains number values.
// The function should return an array
//  containing the average value of each level.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//
// iterative solution
//
const levelAverages = (root) => {
  let levels = [];
  let queue = [{ node: root, level: 0 }];
  while (queue.length > 0) {
    const { node, level } = queue.shift();
    if (levels.length === level) {
      levels.push([node.val]);
    } else {
      levels[level].push(node.val);
    }
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }
  return levels.map(avgs);
};

const avgs = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

//
// recursive solution
//
// const levelAverages = (root) => {
//   let levels = [];
//   fillValues(root, levels, 0);
//   return levels.map(avgs);
// };

// const fillValues = (root, values, level) => {
//   if (root === null) return;
//   if (values.length === level) {
//     values.push([root.val]);
//   } else {
//     values[level].push(root.val);
//   }
//   fillValues(root.left, values, level + 1);
//   fillValues(root.right, values, level + 1);
// };

// const avgs = (arr) => {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum / arr.length;
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

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
