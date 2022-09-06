import * as chai from "chai";
import { productSum } from "./product_sum";

type SpecialArray = Array<number | SpecialArray>;

describe("Product Sum", () => {
  it("Test Case #1", function () {
    const test: SpecialArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    chai.expect(productSum(test)).to.deep.equal(12);
  });
});
