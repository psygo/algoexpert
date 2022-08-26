export type Coin = number;
type Change = number;

type Index = number;
type Length = number;

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

  console.log(sumCombinations);

  const biggestChange: Change = sumCombinations[sumCombinations.length - 1];
  for (let c: Change = 0; c <= biggestChange; c++) {
    // console.log(c);
    // console.log(c in sumCombinations);
    if (!(c in sumCombinations)) return c;
  }

  return biggestChange + 1;
};
