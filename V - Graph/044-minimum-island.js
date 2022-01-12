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
  let min = Infinity;
  let visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let size = explore(grid, r, c, visited);
      if (size < min && size > 0) {
        min = size;
      }
    }
  }

  return min;
};

const explore = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const columnInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !columnInBounds) return 0;

  if (grid[r][c] === "W") return 0;

  let position = r + "," + c;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;

  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);

  return size;
};

// const minimumIsland = (grid) => {
//   // nested loops
//   // depth first w/ visited
//   const visited = new Set();
//   let min = Infinity;
//   for (let row = 0; row < grid.length; row++) {
//     for (let column = 0; column < grid[0].length; column++) {
//       const size = exploreSize(grid, row, column, visited);
//       if (size > 0 && size < min) {
//         min = size;
//       }
//     }
//   }
//   return min;
// };

// const exploreSize = (grid, row, column, visited) => {
//   const rowInBounds = 0 <= row && row < grid.length;
//   const columnInBounds = 0 <= column && column < grid[0].length;
//   if (!rowInBounds || !columnInBounds) return 0;

//   if (grid[row][column] === "W") return 0;

//   const pos = row + "," + column;
//   if (visited.has(pos)) return 0;
//   visited.add(pos);

//   let size = 1; // current position
//   size += exploreSize(grid, row - 1, column, visited);
//   size += exploreSize(grid, row + 1, column, visited);
//   size += exploreSize(grid, row, column - 1, visited);
//   size += exploreSize(grid, row, column + 1, visited);
//   return size;
// };
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
