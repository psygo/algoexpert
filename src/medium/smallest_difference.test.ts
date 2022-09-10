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
});
