const binarySearchTree = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  if (target < root.val) {
    return binarySearch(root.left, target);
  } else {
    return binarySearch(root.right, target);
  }
};
