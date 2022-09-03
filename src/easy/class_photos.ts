type Height = number;

type Length = number;
type Index = number;

export const classPhotos = (
  redShirtHeights: Height[],
  blueShirtHeights: Height[]
): boolean => {
  const orderedRed: Height[] = redShirtHeights.sort(
    (a: Height, b: Height): Height => a - b
  );
  const orderedBlue: Height[] = blueShirtHeights.sort(
    (a: Height, b: Height): Height => a - b
  );
  const length: Length = redShirtHeights.length;

  const ahead: Height[] =
    orderedRed[0] < orderedBlue[0] ? orderedRed : orderedBlue;
  const back: Height[] =
    orderedRed[0] > orderedBlue[0] ? orderedRed : orderedBlue;

  const aheadWorks: boolean[] = [];
  for (let i: Index = 0; i < length; i++) {
    aheadWorks.push(ahead[i] < back[i] ? true : false);
  }

  return aheadWorks.reduce((p: boolean, c: boolean) => p && c);
};
