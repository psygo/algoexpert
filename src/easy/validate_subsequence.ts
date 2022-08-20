export const isValidSubsequence = (
  array: number[],
  sequence: number[]
): boolean => {
  let sliceableArray: number[] = [...array];
  sliceableArray[0] = 10000;

  const checkedSeqNumbers: boolean[] = [];

  for (const seqNum of sequence) {
    const indSeqNum: number = sliceableArray.findIndex(
      (n: number) => n === seqNum
    );

    // findIndex gives back -1 if the number isn't in it.
    if (indSeqNum === -1) return false;

    sliceableArray = sliceableArray.slice(indSeqNum + 1, sliceableArray.length);

    checkedSeqNumbers.push(true);

    if (checkedSeqNumbers.length === sequence.length) return true;
  }

  return false;
};
