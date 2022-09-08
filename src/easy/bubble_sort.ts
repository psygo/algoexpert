type Index = number;
type Length = number;

// O(n^2) T | O(1) S
export const bubbleSort = (array: number[]): number[] => {
  const length: Length = array.length;
  let isSorted: boolean = false;
  // Each bubble sort complete for completely sorts the last item:
  let counter: number = 0; 

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
    
    counter++;
  }

  return array;
};
