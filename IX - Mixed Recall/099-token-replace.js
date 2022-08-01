const tokenReplace = (tokens, s) => {
  let result = [];
  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== "$") {
      result.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== "$") {
      j++;
    } else {
      let key = s.slice(i, j + 1);

      result.push(tokens[key]);
      i = j + 1;
      j = i + 1;
    }
  }
  return result.join("");
};

const tokens = {
  $LOCATION$: "park",
  $ANIMAL$: "dog",
};
console.log(tokenReplace(tokens, "walk the $ANIMAL$ in the $LOCATION$")); // walk the dog in the park
