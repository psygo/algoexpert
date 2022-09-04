type Speed = number;

type Length = number;
type Index = number;

// O(nlogn) T | O(1) S (if able to sort in-place)
export const tandemBicycle = (
  redShirtSpeeds: Speed[],
  blueShirtSpeeds: Speed[],
  fastest: boolean
): Speed => {
  const numOfRiders: Length = redShirtSpeeds.length;
  redShirtSpeeds.sort((a: Speed, b: Speed) => a - b);
  blueShirtSpeeds.sort((a: Speed, b: Speed) => a - b);

  let sumSpeed: Speed = 0;
  for (let i: Index = 0; i < numOfRiders; i++)
    fastest
      ? (sumSpeed += Math.max(
          redShirtSpeeds[i],
          blueShirtSpeeds[numOfRiders - i - 1]
        ))
      : (sumSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]));

  return sumSpeed;
};
