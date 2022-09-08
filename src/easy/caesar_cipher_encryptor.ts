type Index = number;
type Length = number;

// O(n) T | O(1)
// In the way I'm doing it below, it's actually O(n^2)
// It could be O(n) if stored the new letters in an array and then joined.
export const caesarCipherEncryptor = (string: string, key: number): string => {
  const length: Length = string.length;
  let ciphered: string = "";

  for (let i: Index = 0; i < length; i++) {
    const currentCharCode: number = string.charCodeAt(i);
    const newCharCode: number = 97 + ((currentCharCode - 97 + key) % 26);

    ciphered += String.fromCharCode(newCharCode);
  }

  return ciphered;
};
