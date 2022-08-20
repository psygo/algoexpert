import * as chai from "chai";
import { twoNumberSum } from "./two_number_sum";

it("Test Case #1", function () {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  chai.expect(output.length === 2).to.deep.equal(true);
  chai.expect(output.includes(11)).to.deep.equal(true);
  chai.expect(output.includes(-1)).to.deep.equal(true);
});
