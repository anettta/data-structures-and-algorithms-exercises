// Given a collection of n items,
// you can generate n! different permutations.

const permutations = (arr) => {
  if (arr.length === 0) return [[]];

  let first = arr[0];
  let rest = permutations(arr.slice(1));

  let allPermutations = [];

  for (let perm of rest) {
    for (let i = 0; i <= perm.length; i++) {
      allPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return allPermutations;
};
console.log(permutations(["a", "b", "c"]));

// Time: O(n!)
// Space: O(n!)
