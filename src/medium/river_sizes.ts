import { arrayExpect, test } from "../infra/test";

type Matrix = number[][];

const riverSizes = (matrix: Matrix): number[] => {
  const rowsLength: number = matrix.length;
  const columnsLenght: number = matrix.length;
  const rivers: number[][][] = [];
  const visited: Matrix = [];

  for (let i: number = 0; i < rowsLength; i++) {
    for (let j: number = 0; j < columnsLenght; j++) {
      const currentEl: number[] = [i, j];
      if (matrix[i][j] === 1) {
        const newRiver: Matrix = [currentEl];
        visited.push(currentEl);

        //
        rivers.push(newRiver);
      }
    }
  }

  console.log(rivers);
  return [-1];
};

const matrix1: Matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const out1: number[] = [1, 2, 2, 2, 5];

const orderNormalization = (a: number, b: number) => a - b;

test("River Sizes", () => {
  arrayExpect(riverSizes(matrix1).sort(orderNormalization), out1);
});
