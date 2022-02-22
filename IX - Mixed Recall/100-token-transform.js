// write a function, tokenTransform, that takes in an object of tokens and a string.
// In an object, the replacement values for a token may reference other tokens.
// The function should return a new string where tokens are replaced with their fully
// evaluated string values.
// Tokens are enclosed in a pair of '$'.

const tokenTransform = (str, tokens) => {
  let output = [];
  let i = 0;
  let j = 1;
  while (i < str.length) {
    if (str[i] !== "$") {
      output.push(str[i]);
      i++;
      j = i + 1;
    } else if (str[j] !== "$") {
      j++;
    } else {
      const key = str.slice(i, j + 1);
      const value = tokens[key];
      const evaluatedValue = tokenTransform(value, tokens);
      tokens[key] = evaluatedValue;
      output.push(evaluatedValue);
      i = j + 1;
      j = i + 1;
    }
  }

  return output.join("");
};

const tokens = {
  $LOKATION$: "$ANIMAL$ park",
  $ANIMAL$: "dog",
};

console.log(tokenTransform("Walk the $ANIMAL$ park", tokens));
