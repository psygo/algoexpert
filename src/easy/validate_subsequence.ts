// import { shallowExpect, customTest } from "../infra/infra";

type Index = number;
type Length = number;

// Minor problem: my solution slices arrays,
// which might imply copying inefficiencies.
export const isValidSubsequence = (
  array: number[],
  sequence: number[]
): boolean => {
  let sliceableArray: number[] = [...array];
  const sequenceLength: Length = sequence.length;

  const checkedSeqNumbers: boolean[] = [];

  for (const seqNum of sequence) {
    const indSeqNum: Index = sliceableArray.findIndex(
      (n: number) => n === seqNum
    );

    // `.findIndex` gives back `-1` if the number isn't in it.
    if (indSeqNum === -1) return false;

    sliceableArray = sliceableArray.slice(indSeqNum + 1, sliceableArray.length);

    checkedSeqNumbers.push(true);

    if (checkedSeqNumbers.length === sequenceLength) return true;
  }

  return false;
};

// O(n) T | O(1)
export const isValidSubsequenceClem = (
  array: number[],
  sequence: number[]
): boolean => {
  let seqIdx: Index = 0;
  const sequenceLength: Length = sequence.length;

  for (const arrayNum of array) {
    if (seqIdx === sequenceLength) break;
    if (sequence[seqIdx] === arrayNum) seqIdx++;
  }

  return seqIdx === sequenceLength;
};

// const array1: number[] = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence1: number[] = [1, 6, -1];

// customTest("Validate Subsequence", () => {
//   shallowExpect(isValidSubsequence(array1, sequence1), true);
// });
