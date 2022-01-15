const substituteSynonyms = (sentence, synonyms) => {
  let array = sentence.split(" ");

  let subarrays = generate(array, synonyms);

  return subarrays.map((subarray) => subarray.join(" "));
};

const generate = (words, synonyms) => {
  if (words.length === 0) return [[]];
  let firstWord = words[0];
  let remaining = words.slice(1);

  const subarrays = generate(remaining, synonyms); // sequence of words

  if (firstWord in synonyms) {
    const result = [];

    for (let synonym of synonyms[firstWord]) {
      result.push(...subarrays.map((subarray) => [synonym, ...subarray]));
    }
    return result;
  } else {
    return subarrays.map((subarray) => [firstWord, ...subarray]);
  }
};

// n = # words in sentence
// m = max synonyms for a word
// Time: ~O(m^n)
// Space: ~O(m^n)

const sentence = "I like lemons";
const synonyms = {
  lemons: ["mango", "pineapple"],
  like: ["love", "dislike"],
};
console.log(substituteSynonyms(sentence, synonyms));
