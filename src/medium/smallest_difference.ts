type Length = number;
type Pair = [number, number];
const inf = 1000000;

export const smallestDifference = (
  arrayOne: number[],
  arrayTwo: number[]
): Pair => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  const length: Length = arrayOne.length;

  let currentMinAbsDiff = inf;
  let currentMinPair: Pair = [inf, inf];
  let [onePointer, twoPointer] = [0, length - 1];
  while (onePointer < length - 1 || twoPointer > 0) {
    const [currentOne, currentTwo] = [
      arrayOne[onePointer],
      arrayTwo[twoPointer],
    ];

    const currentDiff = currentTwo - currentOne;
    if (currentDiff === 0) return [currentOne, currentTwo];
    const currentAbsDiff = Math.abs(currentDiff);

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
