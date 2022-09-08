type Length = number;
type Index = number;

// O(n) T | O(1) S
export const isPalindrome = (string: string): boolean => {
  const length: Length = string.length;
  const beforeMidPoint: Index = Math.floor(length) - 1;

  let isPal: boolean = true;
  for (let i: Index = 0; i < beforeMidPoint; i++)
    if (string[i] !== string[length - i - 1]) isPal = false;

  return isPal;
};
