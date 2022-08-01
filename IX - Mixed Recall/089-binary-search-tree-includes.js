class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const binarySearchTree = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  if (target < root.val) {
    return binarySearchTree(root.left, target);
  } else if (target > root.val) {
    return binarySearchTree(root.right, target);
  }
};

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
console.log(binarySearchTree(a, 23)); // false
