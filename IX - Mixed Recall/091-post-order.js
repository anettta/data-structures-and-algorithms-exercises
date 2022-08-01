const postOrder = (root) => {
  let values = [];
  postOrderTraversal(root, values);
  return values;
};

const postOrderTraversal = (root, values) => {
  if (root === null) return null;

  postOrderTraversal(root.left, values);
  postOrderTraversal(root.right, values);
  values.push(root.val);
};

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
console.log(postOrder(a));
