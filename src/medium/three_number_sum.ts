type Index = number;
type Length = number;

type Tuplet = [number, number] | [];
type Triplet = [number, number, number];

export const threeNumberSum = (
  array: number[],
  targetSum: number
): Triplet[] => {
  // From the Two Number Sum Problem:
  // Most efficient version: Hash Table + Equation
  // Time: O(n) | Space: O(n) (registering on the hash table)
  const twoNumberSum = (array: number[], targetSum: number): Tuplet[] => {
    const numsTable: Map<number, boolean> = new Map();
    const matches: Tuplet[] = [];

    for (const num of array) {
      const potentialMatch: number = targetSum - num;

      if (numsTable.has(potentialMatch)) matches.push([potentialMatch, num]);

      numsTable.set(num, true);
    }

    return matches;
  };

  const matches: Triplet[] = [];

  for (const num of array) {
    const complement: number = targetSum - num;

    const arrayCopyWithouNum: number[] = [...array].filter(
      (v: number) => v !== num
    );
    const secondaryMatches: Tuplet[] = twoNumberSum(
      arrayCopyWithouNum,
      complement
    );

    if (secondaryMatches.length > 0) {
      for (const secondaryMatch of secondaryMatches) {
        const completeMatch: number[] = [num, ...secondaryMatch];
        completeMatch.sort((a: number, b: number) => a - b);
        matches.push(completeMatch);
      }
    }
  }

  return matches;
};
