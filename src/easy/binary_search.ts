type Index = number;
type Length = number;

// O(logn) T | O(1) S
export const binarySearch = (array: number[], target: number): number => {
  let currentLength: Length = array.length;

  const lowerBound = (): Index => {
    const lower: Index = Math.floor(currentLength / 2) - 1;
    return lower >= 0 ? lower : 0;
  };
  const upperBound = (): Index => {
    const upper: Index = Math.floor(currentLength / 2);
    const ceiledUpper = upper <= currentLength - 1 ? upper : currentLength - 1;
    return ceiledUpper >= 0 ? ceiledUpper : 0;
  };

  let leftPointer: Index = 0;
  let leftEndPointer: Index = lowerBound();
  let rightPointer: Index = upperBound();
  let rightEndPointer: Index = currentLength - 1;

  while (true) {
    if (leftPointer === rightEndPointer && array[leftPointer] !== target)
      return -1;
    else if (target === array[leftPointer]) return leftPointer;
    else if (target === array[rightEndPointer]) return rightEndPointer;
    else if (target > array[leftEndPointer]) {
      currentLength = rightEndPointer - rightPointer;
      leftPointer = rightPointer;
      leftEndPointer = rightPointer + lowerBound();
      rightPointer = rightPointer + upperBound();
    } else {
      currentLength = leftEndPointer - leftPointer;
      rightEndPointer = leftEndPointer;
      leftEndPointer = lowerBound();
      rightPointer = upperBound();
    }
  }
};
