type Index = number;
type Length = number;

// O(n^2) T | O(1) S
// It would have been better to create a while loop with an isSorted variable
// giving out false if it ever enters the if...
export const bubbleSort = (array: number[]): number[] => {
  const length: Length = array.length;
  let isSorted: boolean = false;

  while (!isSorted) {
    isSorted = true;

    for (let i: Index = 0; i < length - 1; i++) {
      const current: number = array[i];
      const next: number = array[i + 1];

      if (current > next) {
        const temp: number = next;

        array[i + 1] = current;
        array[i] = temp;

        isSorted = false;
      }
    }
  }

  return array;
};
