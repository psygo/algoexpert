type Index = number;
type Length = number;

// O(n^2) T | O(1) S
export const selectionSort = (array: number[]): number[] => {
  const inf: number = 100000000;
  const length: Length = array.length;

  for (let i: Index = 0; i < length - 1; i++) {
    const current = array[i];

    let newMin: number = inf;
    let newMinIndex: Index;
    for (let j: Index = i + 1; j < length; j++) {
      if (array[j] < newMin) {
        newMin = array[j];
        newMinIndex = j;
      }
    }

    if (newMin < current) {
      const temp: number = array[i];
      array[i] = newMin;
      array[newMinIndex!] = temp;
    }
  }

  return array;
};
