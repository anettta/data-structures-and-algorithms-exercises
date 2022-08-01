class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const flipTree = (root) => {
  if (root === null) return null;

  let left = flipTree(root.left);
  let right = flipTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

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
console.log(flipTree(a));
