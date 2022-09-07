type Index = number;
type Length = number;

const minusInf: number = -100000;

// O(n) T | O(1) S
// It's kind of a fixed stack implementation
export const findThreeLargestNumbers = (array: number[]): number[] => {
  const largestNums: [number, number, number] = [
    minusInf,
    minusInf + 1,
    minusInf + 2,
  ];
  const length: Length = array.length;

  for (let i: Index = 0; i < length; i++) {
    const current: number = array[i];

    if (current > largestNums[2]) {
      largestNums[0] = largestNums[1];
      largestNums[1] = largestNums[2];
      largestNums[2] = current;
    } else if (current > largestNums[1]) {
      largestNums[0] = largestNums[1];
      largestNums[1] = current;
    } else if (current > largestNums[0]) {
      largestNums[0] = current;
    }
  }

  return largestNums;
};
