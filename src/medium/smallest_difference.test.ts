import * as chai from "chai";
import { smallestDifference } from "./smallest_difference";

describe("Smallest Difference", () => {
  it("Test Case #1", function () {
    chai
      .expect(
        smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
      )
      .to.deep.equal([28, 26]);
  });

  it("Test Case #2", function () {
    chai
      .expect(
        smallestDifference(
          [10, 0, 20, 25, 2000],
          [1005, 1006, 1014, 1032, 1031]
        )
      )
      .to.deep.equal([2000, 1032]);
  });
});
