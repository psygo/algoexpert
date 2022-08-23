// Time:  Unnegative + Sorting + Squaring
//    ->  O(n) + O(nlogn) + O(n) = O(nlogn)
// Space: O(n)
export const sortedSquaredArray = (array: number[]): number[] => {
  const unnegative: number[] = array.map<number>((n: number) =>
    n < 0 ? -n : n
  );

  unnegative.sort((a: number, b: number) => a - b);

  return unnegative.map<number>((n: number) => n ** 2);
};

type Index = number;
type Length = number;
// Time:  O(n)
// Space: O(n)
export const sortedSquaredArrayMoreEfficient = (array: number[]): number[] => {
  const arrayLength: Length = array.length;
  const sortedSquares: number[] = new Array<number>(arrayLength);

  let smallerIdx: Index = 0;
  let biggerIdx: Index = arrayLength - 1;

  for (let i: Index = biggerIdx; i >= 0; i--) {
    const smallerValue: number = array[smallerIdx];
    const biggerValue: number = array[biggerIdx];

    if (Math.abs(smallerValue) > Math.abs(biggerValue)) {
      sortedSquares[i] = smallerValue ** 2;
      smallerIdx++;
    } else {
      sortedSquares[i] = biggerValue ** 2;
      biggerIdx--;
    }
  }

  return sortedSquares;
};
