import * as chai from "chai";
import { threeNumberSum } from "./three_number_sum";

describe("Three Number Sum", () => {
  it("Test Case #1", function () {
    chai.expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).to.deep.equal([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });
});
