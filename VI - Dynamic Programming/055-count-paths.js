// Write a function, countPaths, that takes in a grid as an argument.
// In the grid, 'X' represents walls and 'O' represents open spaces.
// You may only move down or to the right
// and cannot pass through walls.
// The function should return the number of ways possible to travel
// from the top-left corner of the grid to the bottom-right corner.
//
// Time: O(r*c) // rows * columns
// Space: O(r*c) // rows * columns
//

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  let pos = r + "," + c;
  if (pos in memo) memo[pos];
  if (r === grid.length || c === grid[0].length) return 0;
  if (r === grid.length - 1 || c === grid[0].length - 1) return 1;
  let rightCount = countPaths(grid, r + 1, c, memo);
  let downCount = countPaths(grid, r, c + 1, memo);
  memo[pos] = rightCount + downCount;
  return memo[pos];
};

// const countPaths = (grid, r = 0, c = 0, memo = {}) => {
//   if (r === grid.length || c === grid.length || grid[r][c] === "X") return 0;
//   if (r === grid.length - 1 && c === grid[0].length - 1) return 1;
//   let pos = r + "," + c;
//   if (pos in memo) memo[pos];
//   const down = countPaths(grid, r + 1, c, memo);
//   const right = countPaths(grid, r, c + 1, memo);
//   memo[pos] = down + right;
//   return memo[pos];
// };

// const countPaths = (grid, r = 0, c = 0, memo = {}) => {
//   const pos = r + "," + c;
//   if (pos in memo) {
//     return memo[pos];
//   }
//   if (r === grid.length || c === grid[0].length || grid[r][c] === "X") {
//     return 0;
//   }
//   if (r === grid.length - 1 && c === grid[0].length - 1) {
//     return 1;
//   }
//   memo[pos] =
//     countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
//   return memo[pos];
// };
const grid = [
  ["O", "O"],
  ["O", "O"],
];
console.log(countPaths(grid)); // -> 2
