const isBinarySearchTree = (root) => {
  let values = [];
  inOrderTraversal(root, values);
  return isSorted(values);
};

const inOrderTraversal = (root, values) => {
  if (root === null) return;
  inOrderTraversal(root.left, values);
  values.push(root.val);
  inOrderTraversal(root.right, values);
};

const isSorted = (values) => {
  for (let i = 0; i < values.length - 1; i++) {
    let current = values[i];
    let next = values[i + 1];
    if (next < current) {
      return false;
    }
  }
  return true;
};

// console.log(isSorted([2, 8, 4]));

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(isBinarySearchTree(a)); // true
