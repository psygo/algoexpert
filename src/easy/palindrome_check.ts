type Length = number;
type Index = number;

export const isPalindrome = (string: string): boolean => {
  const length: Length = string.length;
  const afterMidPoint: Index = Math.floor(length) - 1;

  let isPal: boolean = true;
  for (let i: Index = 0; i < afterMidPoint; i++)
    if (string[i] !== string[length - i - 1]) isPal = false;

  return isPal;
};
