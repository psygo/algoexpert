import * as chai from "chai";
import { nodeDepths } from "./node_depths";

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe("Node Depths", () => {
  it("Test Case #1", function () {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.left.left = new BinaryTree(4);
    root.left.left.left = new BinaryTree(8);
    root.left.left.right = new BinaryTree(9);
    root.left.right = new BinaryTree(5);
    root.right = new BinaryTree(3);
    root.right.left = new BinaryTree(6);
    root.right.right = new BinaryTree(7);
    const actual = nodeDepths(root);
    chai.expect(actual).to.deep.equal(16);
  });
});
