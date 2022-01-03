// Write a function, islandCount,
// that takes in a grid containing Ws and Ls.
// W represents water and L represents land.
// The function should return the number of islands
// on the grid.
// An island is a vertically or horizontally
// connected region of land.

const islandCount = (grid) => {
  // nested loops
  // depth first w/ visited
  const visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (explore(grid, row, column, visited) === true) {
        count++;
      }
    }
  }
  return count;
};

const explore = (grid, row, column, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const columnInBounds = 0 <= column && column < grid.length;
  if (!rowInBounds || !columnInBounds) return false;
  if (grid[row][column] === "W") return false;
  const pos = row + "," + column;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, row - 1, column, visited);
  explore(grid, row + 1, column, visited);
  explore(grid, row, column - 1, visited);
  explore(grid, row, column + 1, visited);
  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3
