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

const levelAverages = (root) => {
  let levels = [];
  fillLevels(root, levels, 0);
  return levels.map(getAvgs);
};

const getAvgs = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};
const fillLevels = (root, levels, level) => {
  if (root === null) return;

  if (levels.length === level) {
    levels.push([root.val]);
  } else {
    levels[level].push(root.val);
  }

  fillLevels(root.left, levels, level + 1);
  fillLevels(root.right, levels, level + 1);
};

// Time: O(n)
// Space: O(n)

// start recursion
// const levelAverages = (root) => {
//   const levels = [];
//   fillLevels(root, levels, 0);
//   //   const avgs = [];
//   //   for (let level of levels) {
//   //     getAvgs(level);
//   //     avgs.push(getAvgs(level));
//   //   }
//   //   return avgs;
//   return levels.map(getAvgs);
// };

// const getAvgs = (array) => {
//   let sum = 0;
//   for (let num of array) {
//     sum += num;
//   }
//   return sum / array.length;
// };

// const fillLevels = (root, levels, levelNum) => {
//   if (root === null) return;

//   if (levels.length === levelNum) {
//     levels[levelNum] = [root.val];
//   } else {
//     levels[levelNum].push(root.val); // indexing into existing subarray
//   }
//   fillLevels(root.left, levels, levelNum + 1);
//   fillLevels(root.right, levels, levelNum + 1);
// };
// end recursion

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
