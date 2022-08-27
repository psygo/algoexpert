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

// "Inefficient Explore Everything"
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

// O(logn) T (if unbalanced: O(N)
// O(logn) S (if recursion, otherwise O(1) if iteratively)
export const findClosestValueInBstClem = (
  tree: BST,
  target: number
): number => {
  let closest: number = tree.value;
  let currentNode: BST | null = tree;

  while (currentNode) {
    if (!currentNode) return closest;
    else if (Math.abs(target - closest) > Math.abs(target - currentNode.value))
      closest = currentNode.value;
    else if (target < currentNode.value) currentNode = tree.left;
    else if (target > currentNode.value) currentNode = tree.right;
    else break;
  }

  return closest;
};
