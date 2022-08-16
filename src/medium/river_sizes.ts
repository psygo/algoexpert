import { arrayExpect, test } from "../infra/test";

export const riverSizes = (matrix: number[][]): number[] => {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  console.log(matrixCopy);
  return [-1];
};

const matrix1: number[][] = [
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
