type Length = number;
type Index = number;

// O(n) T | O(1) S
export const moveElementToEnd = (array: number[], toMove: number): number[] => {
  const length: Length = array.length;

  let bottomEnd: Index = 0;
  let lastToMove: Index = length;
  for (let i: Index = 0; i < length; i++) {
    const currentNum = array[i];
    if (currentNum !== toMove && lastToMove < i) {
      array[bottomEnd] = currentNum;
      array[i] = toMove;
      bottomEnd++;
    } else {
      lastToMove = i;
    }

    console.log("--------------------------------------");
    console.log("Index: ", i);
    console.log(array);
    console.log(bottomEnd);
    console.log("--------------------------------------");
  }

  return array;
};
