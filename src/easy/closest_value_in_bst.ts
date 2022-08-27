export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// There will always only be one value in the tree.
// O(N) T | O(1) S
export const findClosestValueInBst = (tree: BST, target: number): number => {
  let currentClosestValue: number = tree.value;

  const recursiveExplore = (tree: BST): void => {
    if (Math.abs(tree.value - target) < Math.abs(currentClosestValue - target))
      currentClosestValue = tree.value;

    if (tree.left) recursiveExplore(tree.left);
    if (tree.right) recursiveExplore(tree.right);
  };

  recursiveExplore(tree);

  return currentClosestValue;
};
