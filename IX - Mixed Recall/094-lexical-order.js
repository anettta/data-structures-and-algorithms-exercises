const lexicalOrder = (word1, word2, alphabet) => {
  let maxLengthWord = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLengthWord; i++) {
    let char1 = word1[i];
    let char2 = word2[i];
    let value1 = alphabet.indexOf(char1);
    let value2 = alphabet.indexOf(char2);
    if (value1 < value2) {
      return true;
    } else if (value2 < value1) {
      return false;
    }
  }
  return true;
};

const alphabet = "qwertyuioaplx";

console.log(lexicalOrder("appxx", "apple", alphabet));
