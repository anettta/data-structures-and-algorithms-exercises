const stringSearch = (grid, word) => {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (dfs(grid, word, r, c) === true) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (grid, word, r, c) => {
  const rowInBounds = 0 <= r && r <= grid.length - 1;
  const colInBounds = 0 <= c && c <= grid[0].length - 1;

  if (!rowInBounds || !colInBounds) return false;

  if (word === "") return true;

  if (grid[r][c] !== word[0]) return false;

  const suffix = word.slice(1);
  let result =
    dfs(grid, suffix, r + 1, c) ||
    dfs(grid, suffix, r - 1, c) ||
    dfs(grid, suffix, r, c + 1) ||
    dfs(grid, suffix, r, c - 1);

  return result;
};

const grid = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "c", "m"],
]; //

console.log(stringSearch(grid, "hi")); // true
