type Length = number;
type Index = number;
type Pair = [number, number];
const inf = 1000000;

// O(nlogn + mlogm) T | O(1) S (if sorting in-place.)
export const smallestDifference = (
  arrayOne: number[],
  arrayTwo: number[]
): Pair => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  const lengthOne: Length = arrayOne.length;
  const lengthTwo: Length = arrayTwo.length;
  let idxOne: Index = 0;
  let idxTwo: Index = 0;
  let smallest: number = inf;
  let currentDiff: number = inf;
  let smallestPair: Pair = [arrayOne[0], arrayTwo[0]];

  while (idxOne < lengthOne && idxTwo < lengthTwo) {
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idxTwo];

    if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      currentDiff = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > currentDiff) {
      smallest = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
};

export const smallestDifferenceFailed = (
  arrayOne: number[],
  arrayTwo: number[]
): Pair => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  const length: Length = arrayOne.length;

  let currentMinAbsDiff = inf;
  let currentMinPair: Pair = [inf, inf];
  let [onePointer, twoPointer] = [0, length - 1];
  // How the hell is this ending in an infinite loop???
  // Both pointers either go up or down, they never stay put or go back...
  while (onePointer < length - 1 || twoPointer > 0) {
    const [currentOne, currentTwo] = [
      arrayOne[onePointer],
      arrayTwo[twoPointer],
    ];

    const currentDiff = currentTwo - currentOne;
    if (currentDiff === 0) return [currentOne, currentTwo];
    const currentAbsDiff = Math.abs(currentDiff);

    // Use debugger
    const [nextOne, nextTwo] = [
      arrayOne[onePointer + 1],
      arrayTwo[twoPointer - 1],
    ];
    if (currentDiff > 0 && nextOne < nextTwo) onePointer++;
    else twoPointer--;

    if (currentAbsDiff < currentMinAbsDiff) {
      currentMinAbsDiff = currentAbsDiff;
      currentMinPair = [currentOne, currentTwo];
    }
  }

  return currentMinPair;
};
