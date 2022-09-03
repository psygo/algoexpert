type Height = number;

type Length = number;
type Index = number;

// O(nlogn) T | O(1) S (if we can sort in place)
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

  let aheadWorks: boolean = true;
  for (let i: Index = 0; i < length; i++)
    aheadWorks = aheadWorks && ahead[i] < back[i] ? true : false;

  return aheadWorks;
};
