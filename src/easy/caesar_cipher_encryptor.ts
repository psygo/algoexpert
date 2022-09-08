type Index = number;
type Length = number;

// O(n) T | O(1)
// (ideally, but if there's no efficient way to add to strings, then O(n^2),
//  because then we would have to put letters in an array and then rebuild a
//  string from it)
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
