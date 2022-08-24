export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // From the test file
  insert(values: number[], i = 0) {
    if (i >= values.length) return;

    const queue: BinaryTree[] = [this];

    while (queue.length > 0) {
      let current = queue.shift()!;

      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }

      queue.push(current.left);

      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }

      queue.push(current.right);
    }

    this.insert(values, i + 1);
    return this;
  }
}

// O(N) T | O(N) S
export const branchSums = (root: BinaryTree): number[] => {
  const sums: number[] = [];

  const calculateBranchSums = (
    node: BinaryTree,
    runningSum: number,
    sums: number[]
  ): void => {
    let newRunningSum: number = runningSum + node.value;

    if (node.left === null && node.right === null) {
      sums.push(newRunningSum);
      return;
    }

    if (node.left) calculateBranchSums(node.left, newRunningSum, sums);
    if (node.right) calculateBranchSums(node.right, newRunningSum, sums);
  };

  calculateBranchSums(root, 0, sums);

  return sums;
};
