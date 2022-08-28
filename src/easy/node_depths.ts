export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const nodeDepths = (root: BinaryTree): number => {
  console.log(root);

  return -1;
};
