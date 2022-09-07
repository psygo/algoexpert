import * as chai from "chai";
import { findThreeLargestNumbers } from "./find_three_largest_numbers";

describe("Find Three Largest Numbers", () => {
  it("Test Case #1", function () {
    chai
      .expect(
        findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
      )
      .to.deep.equal([18, 141, 541]);
  });

  it("Test Case #2", function () {
    chai
      .expect(
        findThreeLargestNumbers([55, 43, 11, 3, -3, 10])
      )
      .to.deep.equal([11, 43, 55]);
  });
});
