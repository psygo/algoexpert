// import { arrayExpect, customTest } from "../infra/infra";

type Matrix<T> = T[][];
type CellCoords = [number, number];
type River = CellCoords[];
type Index = number;
type Length = number;

export const riverSizes = (matrix: Matrix<number>): Length[] => {
  const rowsLength: Length = matrix.length;
  const colsLenght: Length = matrix[0].length;
  const rivers: River[] = [];
  const visited: CellCoords[] = [];
  let currentRiver: River;

  const alreadyVisited = (i: Index, j: Index): boolean =>
    visited.find((el: CellCoords) => el[0] === i && el[1] === j) !== undefined;

  const recursivelyVisit = (i: Index, j: Index): void => {
    if (matrix[i][j] === 1 && !alreadyVisited(i, j)) {
      currentRiver.push([i, j]);
      visited.push([i, j]);

      if (j > 0) recursivelyVisit(i, j - 1); // Up
      if (i < rowsLength - 1) recursivelyVisit(i + 1, j); // Down
      if (j < colsLenght - 1) recursivelyVisit(i, j + 1); // Right
      if (i > 0) recursivelyVisit(i - 1, j); // Left
    }
  };

  for (let i: Index = 0; i < rowsLength; i++) {
    for (let j: Index = 0; j < colsLenght; j++) {
      if (matrix[i][j] === 1 && !alreadyVisited(i, j)) {
        currentRiver = [];
        recursivelyVisit(i, j);

        rivers.push(currentRiver);
      } else {
        visited.push([i, j]);
      }
    }
  }

  return rivers.map<Length>((river: River) => river.length);
};

// Treat this problem as a graph traversal (BFS or DFS) problem.
// O(W*H) or O(N) T | O(W*H)
// export const riverSizesClem = (matrix: Matrix<number>): Length[] => {
//   const visited: Matrix<boolean> = matrix.map((v: number[]) =>
//     v.map((_: number) => false)
//   );
//   const rowsLength: Length = matrix.length;
//   const colsLenght: Length = matrix[0].length;
//   const riverSizes: Length[] = [];

//   const getUnvisitedNeighbors = (
//     i: Index,
//     j: Index,
//     matrix: Matrix<number>,
//     visited: Matrix<boolean>
//   ): CellCoords[] => {
//     const unvisitedNeighbors: CellCoords[] = [];

//     if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);

//     if (i < matrix.length - 1 && !visited[i + 1][j])
//       unvisitedNeighbors.push([i + 1, j]);

//     if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);

//     if (j < matrix[0].length - 1 && !visited[i][j + 1])
//       unvisitedNeighbors.push([i, j + 1]);

//     return unvisitedNeighbors;
//   };

//   const traverseNode = (
//     i: Index,
//     j: Index,
//     matrix: Matrix<number>,
//     visited: Matrix<boolean>,
//     riverSizes: Length[]
//   ): void => {
//     let currentRiverSize: Length = 0;
//     const nodesToExplore: CellCoords[] = [[i, j]]; // Stack (DFS) || If BFS, queue

//     // Both BFS and DFS work, either recursively or not.
//     while (nodesToExplore.length) {
//       const currentNode: CellCoords = nodesToExplore.pop()!;
//       const currentI: Index = currentNode[0];
//       const currentJ: Index = currentNode[1];

//       if (visited[currentI][currentJ]) continue;

//       visited[currentI][currentJ] = true;

//       if (matrix[currentI][currentJ] === 0) continue;

//       currentRiverSize++;

//       const unvisitedNeighbors: CellCoords[] = getUnvisitedNeighbors(
//         i,
//         j,
//         matrix,
//         visited
//       );

//       for (const neighbor of unvisitedNeighbors) {
//         nodesToExplore.push(neighbor);
//       }
//     }

//     if (currentRiverSize > 0) riverSizes.push(currentRiverSize);
//   };

//   for (let i: Index = 0; i < rowsLength; i++) {
//     for (let j: Index = 0; j < colsLenght; j++) {
//       if (visited[i][j]) continue;

//       traverseNode(i, j, matrix, visited, riverSizes);
//     }
//   }

//   return riverSizes;
// };

// const matrix1: Matrix<number> = [
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0],
// ];
// const out1: number[] = [1, 2, 2, 2, 5];

// const matrix2: Matrix<number> = [
//   [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
//   [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
//   [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
// ];
// const out2: number[] = [1, 1, 2, 2, 5, 21];

// const orderNormalization = (a: number, b: number) => a - b;

// customTest("River Sizes", () => {
//   const riverSizes1: number[] = riverSizes(matrix1).sort(orderNormalization);
//   arrayExpect(riverSizes1, out1);
// });

// customTest("River Sizes", () => {
//   const riverSizes2: number[] = riverSizes(matrix2).sort(orderNormalization);
//   arrayExpect(riverSizes2, out2);
// });
