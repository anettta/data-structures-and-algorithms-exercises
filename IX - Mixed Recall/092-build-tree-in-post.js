const buildTreeInPre = (inOrder, postOrder) => {
  if (inOrder.length === null) return null;
  let value = postOrder[postOrder.length - 1];
  let root = new Node(value);
  let mid = inOrder.indexOf(values);
  let leftIn = inOrder.slice(0, mid);
  let rightIn = inOrder.slice(mid + 1);
  let rightPost = postOrder.slice(0, leftIn.length);
  let leftPost = postOrder.slice(leftIn.length, -1);
  root.left = buildTreeInPre(leftIn, leftPost);
  root.right = buildTreeInPre(rightIn, rightPost);
  return root;
};
