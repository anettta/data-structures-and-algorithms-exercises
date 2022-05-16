const canConcat = (s, words, memo = {}) => {
  if (s === "") return true;
  if (s in memo) return memo[s];

  for (let word of words) {
    if (s.startsWith(word) === true) {
      let suffix = s.slice(word.length);
      if (canConcat(suffix, words, memo) === true) {
        memo[s] = true;
        return true;
      }
    }
  }
  memo[s] = false;
  return false;

  // if (s === "") return true;
  // if (s in memo) return memo[s];

  // for (let word of words) {
  //   if (s.startsWith(word) === true) {
  //     const suffix = s.slice(word.length);
  //     if (canConcat(suffix, words, memo) === true) {
  //       memo[s] = true;
  //       return true;
  //     }
  //   }
  // }
  // memo[s] = false;
  // return false;
};

console.log(canConcat("foodisgood", ["is", "g", "f", "ood", "foo"])); // true
