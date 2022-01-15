const createCombos = (arr, lengthOfArguments) => {
  if (lengthOfArguments === 0) return [[]];
  if (lengthOfArguments > arr.length) return [];

  const first = arr[0];
  const partialCombos = createCombos(arr.slice(1), lengthOfArguments - 1);
  const combosWithFirst = [];
  for (let partialCombo of partialCombos) {
    combosWithFirst.push([first, ...partialCombo]);
  }
  const combosWithoutFirst = createCombos(arr.slice(1), lengthOfArguments);
  return [...combosWithFirst, ...combosWithoutFirst];
};

console.log(createCombos(["a", "b", "c"], 3));

// Time: O(2^k)
// Space: O(2^k)
