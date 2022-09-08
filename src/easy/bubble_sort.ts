type Index = number;
type Length = number;

// O(n^2) T | O(1) S
export const bubbleSort = (array: number[]): number[] => {
  const length: Length = array.length;

  for (let j: Index = 0; j < length; j++) {
    for (let i: Index = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp: number = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
};
