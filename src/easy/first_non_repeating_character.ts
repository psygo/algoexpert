type Index = number;
type Length = number;

type Letter = string;

const inf: number = 10000000;

export const firstNonRepeatingCharacter = (string: string): number => {
  const length: Length = string.length;
  const repeatMap: Map<Letter, Index[]> = new Map();

  for (let i: Index = 0; i < length; i++) {
    const currentLetter: Letter = string[i];

    if (!repeatMap.get(currentLetter)) repeatMap.set(currentLetter, [i]);
    else repeatMap.set(currentLetter, [...repeatMap.get(currentLetter)!, i]);
  }

  let min: Index = inf;
  for (const [_, indices] of repeatMap)
    if (indices.length === 1 && indices[0] < min) min = indices[0];

  return min !== inf ? min : -1;
};
