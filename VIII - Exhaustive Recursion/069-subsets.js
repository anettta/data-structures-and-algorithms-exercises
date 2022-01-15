const subsets = (arr) => {
  if (arr.length === 0) return [[]];
  let first = arr[0];
  const withoutFirst = subsets(arr.slice(1));

  const withFirst = [];
  for (let sub of withoutFirst) {
    withFirst.push([first, ...sub]);
  }

  return [...withoutFirst, ...withFirst];
};

console.log(subsets(["a", "b", "c"]));

// Time: ~O(2^n)
// Space: ~O(2^n)
