type Index = number;
type Length = number;

type Letter = string;

const inf: number = 10000000;

// O(n) T | O(n) S
// If I had simply created a table of frequencies instead of list of indices,
// then it would have been O(1) S.
export const firstNonRepeatingCharacter = (string: string): number => {
  const length: Length = string.length;
  const repeatMap: Map<Letter, Index[]> = new Map();

  for (let i: Index = 0; i < length; i++) {
    const currentLetter: Letter = string[i];

    if (!repeatMap.get(currentLetter)) repeatMap.set(currentLetter, [i]);
    else repeatMap.get(currentLetter)!.push(i);
  }

  let min: Index = inf;
  for (const [_, indices] of repeatMap)
    if (indices.length === 1 && indices[0] < min) min = indices[0];

  return min !== inf ? min : -1;
};
