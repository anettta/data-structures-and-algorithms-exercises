const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  let firstEl = elements[0];
  let elWithoutFirst = subsets(elements.slice(1));
  let elWithFirst = [];

  for (let sub of elWithoutFirst) {
    elWithFirst.push([...sub, firstEl]);
  }
  return [...elWithoutFirst, ...elWithFirst];
};

console.log(subsets(["a", "b", "c"]));

// Time: ~O(2^n)
// Space: ~O(2^n)
