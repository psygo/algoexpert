import * as chai from "chai";
import { findThreeLargestNumbers } from "./find_three_largest_numbers";

it("Test Case #1", function () {
  chai
    .expect(
      findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
    )
    .to.deep.equal([18, 141, 541]);
});
