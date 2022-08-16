import { arrayExpect, test } from "../infra/test";

type Matrix = number[][];

export const riverSizes = (matrix: Matrix): number[] => {
  let matrixCopy: Matrix = JSON.parse(JSON.stringify(matrix));
  const riverSizes: number[] = [];

  console.log(matrixCopy);
  return riverSizes;
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
