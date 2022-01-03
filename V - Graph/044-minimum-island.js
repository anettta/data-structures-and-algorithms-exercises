// Write a function, minimumIsland,
// that takes in a grid containing Ws and Ls.
// W represents water and L represents land.
// The function should return the size
// of the smallest island.
// An island is a vertically or horizontally
// connected region of land.
//
// You may assume that the grid contains at least one island.

const minimumIsland = (grid) => {
  // nested loops
  // depth first w/ visited
  const visited = new Set();
  let min = Infinity;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      const size = exploreSize(grid, row, column, visited);
      if (size > 0 && size < min) {
        min = size;
      }
    }
  }
  return min;
};

const exploreSize = (grid, row, column, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const columnInBounds = 0 <= column && column < grid[0].length;
  if (!rowInBounds || !columnInBounds) return 0;

  if (grid[row][column] === "W") return 0;

  const pos = row + "," + column;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1; // current position
  size += exploreSize(grid, row - 1, column, visited);
  size += exploreSize(grid, row + 1, column, visited);
  size += exploreSize(grid, row, column - 1, visited);
  size += exploreSize(grid, row, column + 1, visited);
  return size;
};
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
