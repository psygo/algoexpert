type Index = number;
type FibNumber = number;

// O(2^n) T | O(n) S
export const getNthFib = (n: Index): FibNumber => {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  else return getNthFib(n - 1) + getNthFib(n - 2);
};

// O(n) T | O(n) S
export const getNthFibMemoized = (n: Index): FibNumber => {
  const memo: Map<Index, FibNumber> = new Map();
  memo.set(1, 0);
  memo.set(2, 1);

  for (let i: Index = 3; i < n + 1; i++)
    memo.set(i, memo.get(i - 1)! + memo.get(i - 2)!);

  return memo.get(n)!;
};

// O(n) T | O(1) S
export const getNthFibFixed = (n: Index): FibNumber => {
  const lastTwo: FibNumber[] = [0, 1];

  let nextFib: FibNumber;
  for (let i: Index = 3; i <= n; i++) {
    nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
};
