type Length = number;
type Index = number;

// O(n^2) T | O(1) S
export const insertionSort = (array: number[]): number[] => {
  const length: Length = array.length;

  const swap = (currentIndex: Index, previousIndex: Index): void => {
    const temp: number = array[previousIndex];
    array[previousIndex] = array[currentIndex];
    array[currentIndex] = temp;
  };

  for (let i: Index = 0; i < length; i++) {
    let j: Index = i;

    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1);
      j--;
    }
  }

  return array;
};
