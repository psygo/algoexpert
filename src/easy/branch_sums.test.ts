import * as chai from "chai";

import { BinaryTree, branchSums } from "./branch_sums";

it("Test Case #1", function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  chai.expect(branchSums(tree!)).to.deep.equal([15, 16, 18, 10, 11]);
});

// class BinaryTree {
//   value: number;
//   left: BinaryTree | null;
//   right: BinaryTree | null;

//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(values: number[], i = 0) {
//     if (i >= values.length) return;
//     const queue: BinaryTree[] = [this];
//     while (queue.length > 0) {
//       let current = queue.shift()!;
//       if (current.left === null) {
//         current.left = new BinaryTree(values[i]);
//         break;
//       }
//       queue.push(current.left);
//       if (current.right === null) {
//         current.right = new BinaryTree(values[i]);
//         break;
//       }
//       queue.push(current.right);
//     }
//     this.insert(values, i + 1);
//     return this;
//   }
// }
