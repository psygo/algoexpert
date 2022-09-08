type Index = number;
type Length = number;
type Frequency = number;

// O(n) T | O(n) S
export const generateDocument = (
  characters: string,
  document: string
): boolean => {
  const frequencyMap = (s: string): Map<string, Frequency> => {
    const length: Length = s.length;
    const freqMap: Map<string, Frequency> = new Map();

    for (let i: Index = 0; i < length; i++) {
      const currentLetter: string = s[i];

      if (freqMap.has(currentLetter))
        freqMap.set(currentLetter, freqMap.get(currentLetter)! + 1);
      else freqMap.set(currentLetter, 1);
    }

    return freqMap;
  };

  const availableChars: Map<string, Frequency> = frequencyMap(characters);
  const charsInDocument: Map<string, Frequency> = frequencyMap(document);

  let isPossible: boolean = true;
  for (const [letter, frequency] of charsInDocument) {
    const availableFrequency: number = availableChars.get(letter)
      ? availableChars.get(letter)!
      : 0;

    if (availableFrequency < frequency) isPossible = false;
  }

  return isPossible;
};
