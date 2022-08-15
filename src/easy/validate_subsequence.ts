const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  let sliceableArray: number[] = array;
  const checkedSeqNumbers: boolean[] = [];

  for (const seqNum of sequence) {
    const indSeqNum: number = sliceableArray.findIndex(
      (n: number) => n === seqNum
    );

    if (typeof indSeqNum === "number") {
      sliceableArray = sliceableArray.slice(indSeqNum, sliceableArray.length);

      console.log(sliceableArray);

      checkedSeqNumbers.push(true);
      if (checkedSeqNumbers.length === sequence.length) return true;
    } else {
      return false;
    }
  }

  return false;
};

const array1: number[] = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence1: number[] = [1, 6, 10, -1];

console.log(isValidSubsequence(array1, sequence1));
