type Index = number;
type Length = number;

type Frequency = number;
type FreqMap = Map<string, Frequency>;

// O(n+m) (= O(max(n, m))?) T | O(c) S (c = unique characters)
export const generateDocument = (
  characters: string,
  document: string
): boolean => {
  const frequencyMap = (s: string): FreqMap => {
    const length: Length = s.length;
    const freqMap: FreqMap = new Map();

    for (let i: Index = 0; i < length; i++) {
      const currentLetter: string = s[i];

      if (freqMap.has(currentLetter))
        freqMap.set(currentLetter, freqMap.get(currentLetter)! + 1);
      else freqMap.set(currentLetter, 1);
    }

    return freqMap;
  };

  const availableChars: FreqMap = frequencyMap(characters);
  const charsInDocument: FreqMap = frequencyMap(document);

  let isPossible: boolean = true;
  for (const [letter, frequency] of charsInDocument) {
    const availableFrequency: number = availableChars.get(letter)
      ? availableChars.get(letter)!
      : 0;

    if (availableFrequency < frequency) isPossible = false;
  }

  return isPossible;
};
