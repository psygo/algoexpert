type Length = number;
type Index = number;

// O(n) T | O(1) S
export const moveElementToEnd = (array: number[], toMove: number): number[] => {
  const length: Length = array.length;
  let i: Index = 0;
  let j: Index = length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j--;

    if (array[i] === toMove) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    i++;
  }

  return array;
};
