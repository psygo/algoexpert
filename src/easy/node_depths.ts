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

type Node = BinaryTree;
type Depth = number;

// O(N) T | O(N) S
export const nodeDepths = (root: BinaryTree): number => {
  let nodesOnCurrentLayer: Node[] = [root];
  let nodesOnNextLayer: Node[] = [];
  let currentLayerMultiplier: Depth = 0;
  let nodeDepthsSum: Depth = 0;

  while (nodesOnCurrentLayer.length !== 0) {
    currentLayerMultiplier++;

    for (const node of nodesOnCurrentLayer) {
      if (node.left) nodesOnNextLayer.push(node.left);
      if (node.right) nodesOnNextLayer.push(node.right);
    }

    nodeDepthsSum += currentLayerMultiplier * nodesOnNextLayer.length;

    nodesOnCurrentLayer = [...nodesOnNextLayer];
    nodesOnNextLayer = [];
  }

  return nodeDepthsSum;
};
