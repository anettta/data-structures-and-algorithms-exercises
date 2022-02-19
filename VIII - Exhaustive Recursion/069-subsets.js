const subsets = (elements) => {
  if (elements.length === 0) return [[]]; // we need to include an empty array
  let first = elements[0];
  const subWithoutFirst = subsets(elements.slice(1)); // [[], [b], [c], [b,c]]
  const subWithFirst = [];
  for (let sub of subWithoutFirst) {
    subWithFirst.push([first, ...sub]);
  }
  return [...subWithFirst, ...subWithoutFirst];
};

console.log(subsets(["a", "b", "c"]));

// Time: ~O(2^n)
// Space: ~O(2^n)
