export type Coin = number;
type Change = number;

type Index = number;
type Length = number;

// (That's such a subtle thing to catch...)
// O(nlogn) T | O(1) S (if ordered in-place, otherwise O(N))
export const nonConstructibleChangeTim = (coins: Coin[]): Change => {
  const orderedCoins: Coin[] = coins.sort((a: Coin, b: Coin) => a - b);

  let currentChangeCreated: number = 0;
  for (const coin of orderedCoins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;

    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
};

// O(N^2) T | O(N^2) S
export const nonConstructibleChange = (coins: Coin[]): Change => {
  const numberOfCoins: Length = coins.length;
  const orderedCoins: Coin[] = coins.sort((a: Coin, b: Coin) => a - b);

  if (numberOfCoins === 0) return 1;

  let sumCombinations: Change[] = [];

  for (let i: Index = 0; i < numberOfCoins; i++) {
    const newCoin: Coin = orderedCoins[i];
    const sumCombinationsLength: Length = sumCombinations.length;

    if (sumCombinationsLength === 0) {
      sumCombinations.push(newCoin);
      continue;
    }

    const newCombinations: Change[] = sumCombinations.map<Change>(
      (previousCombinations: Change) => previousCombinations + newCoin
    );
    sumCombinations.push(newCoin, ...newCombinations);
  }

  const biggestChange: Change = sumCombinations[sumCombinations.length - 1];
  for (let c: Change = 1; c < biggestChange; c++) {
    // if (c in sumCombinations) return c;
    // Why the fuck is this assertion not working???
    // Anyway, here is a synonym:
    if (sumCombinations.filter((v: Change) => v === c).length === 0) return c;
  }

  return biggestChange + 1;
};
