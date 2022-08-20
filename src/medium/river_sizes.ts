import { arrayExpect, customTest } from "../infra/infra";

type Matrix = number[][];
type CellCoords = [number, number];
type River = CellCoords[];

const riverSizes = (matrix: Matrix): number[] => {
  const rowsLength: number = matrix.length;
  const colsLenght: number = matrix[0].length;
  const rivers: River[] = [];
  const visited: CellCoords[] = [];
  let currentRiver: River;

  const alreadyVisited = (i: number, j: number): boolean =>
    visited.find((el: CellCoords) => el[0] === i && el[1] === j) !== undefined;

  const recursivelyVisit = (i: number, j: number): void => {
    if (matrix[i][j] === 1 && !alreadyVisited(i, j)) {
      currentRiver.push([i, j]);
      visited.push([i, j]);

      if (j > 0) recursivelyVisit(i, j - 1); // Up
      if (i < rowsLength - 1) recursivelyVisit(i + 1, j); // Down
      if (j < colsLenght - 1) recursivelyVisit(i, j + 1); // Right
      if (i > 0) recursivelyVisit(i - 1, j); // Left
    }
  };

  for (let i: number = 0; i < rowsLength; i++) {
    for (let j: number = 0; j < colsLenght; j++) {
      if (matrix[i][j] === 1 && !alreadyVisited(i, j)) {
        currentRiver = [];
        recursivelyVisit(i, j);

        rivers.push(currentRiver);
      } else {
        visited.push([i, j]);
      }
    }
  }

  return rivers.map((river: River) => river.length);
};

const matrix1: Matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const out1: number[] = [1, 2, 2, 2, 5];

const matrix2: Matrix = [
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
];
const out2: number[] = [1, 1, 2, 2, 5, 21];

const orderNormalization = (a: number, b: number) => a - b;

customTest("River Sizes", () => {
  const riverSizes1: number[] = riverSizes(matrix1).sort(orderNormalization);
  arrayExpect(riverSizes1, out1);
});

customTest("River Sizes", () => {
  const riverSizes2: number[] = riverSizes(matrix2).sort(orderNormalization);
  arrayExpect(riverSizes2, out2);
});
