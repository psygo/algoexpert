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
    } else if (currentNum === toMove) {
      lastToMove = i;
      bottomEnd = i;
    }

    console.log("--------------------------------------");
    console.log("Index: ", i);
    console.log("Current Num: ", currentNum);
    console.log("Last to Move: ", lastToMove);
    console.log("Array: ", array);
    console.log("Bottom End: ", bottomEnd);
    console.log("--------------------------------------");
  }

  console.log("Final Array: ", array);

  return array;
};
