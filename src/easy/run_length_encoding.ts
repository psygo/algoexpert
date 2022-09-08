type Index = number;
type Length = number;

export const runLengthEncoding = (string: string): string => {
  const length: Length = string.length;
  const encoded: string[] = [];

  let cache: string = string[0];
  let cacheCounter: number = 1;
  for (let i: Index = 1; i < length; i++) {
    const nextLetter: string = string[i];

    console.log("--------------------------------------");
    console.log(string[i]);
    console.log(encoded);
    console.log(cache);
    console.log(cacheCounter);
    console.log(cache !== nextLetter);
    console.log("--------------------------------------");

    if (cache !== nextLetter || (cache === nextLetter && cacheCounter === 9)) {
      encoded.push(`${cacheCounter}${cache}`);
      cache = nextLetter;
      cacheCounter = 0;
    }

    cacheCounter++;
  }

  encoded.push(`${cacheCounter}${cache}`);

  return encoded.join("");
};
