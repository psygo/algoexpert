type Index = number;
type Length = number;

// 1
// With a dual for-loop, we get C(n, 2) = n(n-1)/2 -> O(n^2)
// Time: O(n^2) | Space: O(1)
export const twoNumberSum = (array: number[], targetSum: number) => {
  const length: Length = array.length;

  for (let i: Index = 0; i < length; i++) {
    for (let j: Index = i + 1; j < length; j++) {
      if (array[i] + array[j] === targetSum) return [array[i], array[j]];
    }
  }

  return [];
};

// 2
// Most efficient version: Hash Table + Equation
// Time: O(n) | Space: O(n) (registering on the hash table)
export const twoNumberSumHash = (array: number[], targetSum: number) => {
  const numsTable: Map<number, boolean> = new Map();

  for (const num of array) {
    const potentialMatch: number = targetSum - num;

    if (numsTable.has(potentialMatch)) return [potentialMatch, num];

    numsTable.set(num, true);
  }

  return [];
};

// 3
// Pointer Method
// Time: O(nlogn) (Quicksort-like sorting) | Space: O(1)
export const twoNumberSumPointers = (array: number[], targetSum: number) => {
  const sortedArray: number[] = array.sort((a: number, b: number) => a - b);
  let leftPointer: Index = 0;
  let rightPointer: Index = array.length - 1;
  let currentSum: number;

  while (leftPointer < rightPointer) {
    currentSum = sortedArray[leftPointer] + sortedArray[rightPointer];

    if (currentSum === targetSum) {
      return [sortedArray[leftPointer], sortedArray[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer += 1;
    } else if (currentSum > targetSum) {
      rightPointer -= 1;
    }
  }

  return [];
};
