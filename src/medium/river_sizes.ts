import { expect, test } from "../infra/infra";

export const riverSizes = (matrix: number[][]): number[] => {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  console.log(matrixCopy);
  return [-1];
};

const matrix1 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const out1 = [1, 2, 2, 2, 5];

test("River Sizes", () => {
  expect(riverSizes(matrix1), out1);
});
