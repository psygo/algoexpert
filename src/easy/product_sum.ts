type SpecialArray = Array<number | SpecialArray>;
type ProductSum = number;

type Length = number;
type Index = number;

// O(n) T | O(1) S (or O(D) if there's no optimization for recursion stacks)
export const productSum = (
  array: SpecialArray,
  depth: number = 1
): ProductSum => {
  const length: Length = array.length;

  let sum: ProductSum = 0;
  for (let i: Index = 0; i < length; i++) {
    const current: number | SpecialArray = array[i];

    if (typeof current === "number") sum += current;
    else sum += (depth + 1) * productSum(current, depth + 1);
  }

  return sum;
};
