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

export const findClosestValueInBst = (tree: BST, target: number): number => {
  return -1;
};
