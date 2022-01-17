class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leftyNodes = (root) => {
  let values = [];

  const traverse = (node, level) => {
    if (node === null) return;

    if (values[level] === undefined) {
      values.push(node.val);
    }
    traverse(node.right, level++);
    traverse(node.left, level++);
  };
  traverse(root, 0);

  return values;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.right = b;
a.left = c;

//               a
//            c      b

console.log(leftyNodes(a));
