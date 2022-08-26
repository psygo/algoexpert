import * as chai from "chai";
import { BST, findClosestValueInBst } from "./closest_value_in_bst";

it("Test Case #1", function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  const expected = 13;
  const actual = findClosestValueInBst(root, 12);
  chai.expect(actual).to.deep.equal(expected);
});
