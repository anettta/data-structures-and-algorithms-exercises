class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const lowestCommonAncestor = (root, val1, val2) => {
  let path1 = getPath(root, val1);
  let path2 = getPath(root, val2);
  let set1 = new Set(path2);
  for (let val of path1) {
    if (set1.has(val)) {
      return val;
    }
  }
};

const getPath = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  let leftPath = getPath(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  let rightPath = getPath(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }
  return null;
};

// const lowestCommonAncestor = (root, val1, val2) => {
//   const path1 = getPath(root, val1);
//   const path2 = getPath(root, val2);
//   const set2 = new Set(path2);
//   for (let val of path1) {
//     if (set2.has(val)) return val;
//   }
// };

// const getPath = (root, target) => {
//   if (root === null) return null;
//   if (root.val === target) return [root.val];

//   let leftPath = getPath(root.left, target);
//   if (leftPath !== null) {
//     leftPath.push(root.val);
//     return leftPath;
//   }
//   let rightPath = getPath(root.right, target);
//   if (rightPath !== null) {
//     rightPath.push(root.val);
//     return rightPath;
//   }

//   return null;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.left = b;
a.right = c;
c.left = d;
c.right = e;
//               a
//            b      c
//                d     e
console.log(lowestCommonAncestor(a, "d", "e"));
