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
  while (onePointer < length - 1 && twoPointer > 0) {
    const [currentOne, currentTwo] = [
      arrayOne[onePointer],
      arrayTwo[twoPointer],
    ];
    const currentDiff = currentTwo - currentOne;
    const currentAbsDiff = Math.abs(currentDiff);

    if (currentDiff === 0) return [currentOne, currentTwo];
    else if (currentDiff < 0) onePointer++;
    else if (currentDiff > 0) twoPointer--;

    if (currentAbsDiff < currentMinAbsDiff) {
      currentMinAbsDiff = currentAbsDiff;
      currentMinPair = [currentOne, currentTwo];
    }
  }

  return currentMinPair;
};
