const detectDictionary = (words, alphabet) => {
  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    let nextWord = words[i + 1];
    if (lexicalOrder(word, nextWord, alphabet) === false) {
      return false;
    }
  }
  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  let length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i++) {
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

const alphabet = "mapvbunsd";

console.log(
  detectDictionary(["map", "bus"], alphabet) // true
);

console.log(detectDictionary(["bus", "map"], alphabet)); // false
