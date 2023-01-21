// Write a function, closestCarrot,
// that takes in a grid, a starting row,
// and a starting column.
// In the grid, 'X's are walls, 'O's are open spaces,
//  and 'C's are carrots.
// The function should return a number
// representing the length of the shortest path
// from the starting position to a carrot.
// You may move up, down, left, or right,
// but cannot pass through walls (X).
//  If there is no possible path to a carrot,
// then return -1.

const closestCarrot = (grid, startRow, startCol) => {
  let visited = new Set([startRow + "," + startCol]);
  let queue = [[startRow, startCol, 0]];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === "C") return distance;

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const rowInBounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInBounds = 0 <= neighborCol && neighborCol < grid[0].length;
      const pos = neighborRow + "," + neighborCol;
      if (
        rowInBounds &&
        colInBounds &&
        grid[neighborRow][neighborCol] !== "X" &&
        !visited.has(pos)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(pos);
      }
    }
  }
  return -1;
};

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4
