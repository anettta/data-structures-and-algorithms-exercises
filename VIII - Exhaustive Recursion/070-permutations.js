// Given a collection of n items,
// you can generate n! different permutations.

const permutations = (arr) => {
  if (arr.length === 0) return [[]]; // single permutation

  const fullPermutation = [];
  const first = arr[0];
  for (let perm of permutations(arr.slice(1))) {
    for (let i = 0; i <= perm.length; i++) {
      fullPermutation.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return fullPermutation;
};
console.log(permutations(["a", "b", "c"]));

// Time: O(n!)
// Space: O(n!)
