// type Index = number;
type Length = number;

type Tuplet = [number, number] | [];
type Triplet = [number, number, number];

// O(n^2) T | O(n) S
export const threeNumberSum = (
  array: number[],
  targetSum: number
): Triplet[] => {
  array.sort((a, b) => a - b);
  const length: Length = array.length;
  const triplets: Triplet[] = [];

  for (let i = 0; i < length - 2; i++) {
    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
};

export const threeNumberSumAlmost = (
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
        // matches.push(completeMatch);
      }
    }
  }

  return matches;
};
