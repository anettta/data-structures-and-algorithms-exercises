const quickConcat = (s, words) => {
  let result = quickestConcat(s, words);
  return result === Infinity ? -1 : result;
};

const quickestConcat = (s, words) => {
  if (s === "") return 0;

  let min = Infinity;

  for (let word of words) {
    if (s.startsWith(word) === true) {
      const suffix = s.slice(word.length);
      const currentSize = 1 + quickestConcat(suffix, words);
      if (currentSize < min) {
        min = currentSize;
      }
    }
  }
  return min;
};

console.log(
  quickConcat("foodisgood", ["is", "g", "foodisgood", "f", "ood", "foo"])
); // 1
