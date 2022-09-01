type Query = number;

// O(nlogn) T | O(n) S
export const minimumWaitingTime = (queries: Query[]): Query => {
  const orderedQueries: Query[] = queries.sort((a: Query, b: Query) => a - b);
  orderedQueries.pop();

  // Probably could have done with a `.map` as well...
  // Didn't need a second array for it, which would make it O(1)
  const queriesQueue: Query[] = [0];
  for (const q of orderedQueries) {
    const lastOnQueue: Query = queriesQueue[queriesQueue.length - 1];
    queriesQueue.push(q + lastOnQueue);
  }

  return queriesQueue.reduce((p: Query, c: Query) => p + c);
};
