import { expect, test } from "../infra/test";

const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  let sliceableArray: number[] = [...array];
  sliceableArray[0] = 10000;

  const checkedSeqNumbers: boolean[] = [];

  for (const seqNum of sequence) {
    const indSeqNum: number = sliceableArray.findIndex(
      (n: number) => n === seqNum
    );

    // findIndex gives back -1 if the number isn't in it.
    if (indSeqNum !== -1) {
      sliceableArray = sliceableArray.slice(
        indSeqNum + 1,
        sliceableArray.length
      );

      checkedSeqNumbers.push(true);

      if (checkedSeqNumbers.length === sequence.length) return true;
    } else {
      return false;
    }
  }

  return false;
};

const array1: number[] = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence1: number[] = [1, 6, -1];

test("Validate Sequence", () => {
  expect(isValidSubsequence(array1, sequence1), true);
});
