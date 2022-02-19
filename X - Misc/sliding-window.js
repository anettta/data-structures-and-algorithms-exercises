const longestSubStrWDistChars = (str, k) => {
  let start = 0;
  let longest = 0;
  let map = {};
  for (let end = 0; end < str.length; end++) {
    let currentEndChar = str[end];
    if (!map[currentEndChar]) {
      map[currentEndChar] = 0;
    }
    map[currentEndChar] = 1;

    // only if we need to shrink our sliding window
    while (Object.keys(map).length > k) {
      let currentStartChar = str[start];
      map[currentStartChar]--;

      if (map[currentStartChar] === 0) {
        delete map[currentStartChar];
      }
      start++;
    }
    longest = Math.max(longest, end - start + 1);
  }
  return longest;
};

console.log(longestSubStrWDistChars("acccedddpl", 3)); // 7
