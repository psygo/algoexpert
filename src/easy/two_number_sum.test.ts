import * as chai from "chai";

import {
  twoNumberSum,
  twoNumberSumHash,
  twoNumberSumPointers,
} from "./two_number_sum";

describe("Two Number Sum", () => {
  it("Test Case #1 | Double Fors", () => {
    const output: number[] = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
    chai.expect(output.length === 2).to.deep.equal(true);
    chai.expect(output.includes(11)).to.deep.equal(true);
    chai.expect(output.includes(-1)).to.deep.equal(true);
  });

  it("Test Case #1 | Hash Table", () => {
    const output: number[] = twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10);
    chai.expect(output.length === 2).to.deep.equal(true);
    chai.expect(output.includes(11)).to.deep.equal(true);
    chai.expect(output.includes(-1)).to.deep.equal(true);
  });

  it("Test Case #1 | Left and Right Pointers", () => {
    const output: number[] = twoNumberSumPointers([3, 5, -4, 8, 11, 1, -1, 6], 10);
    chai.expect(output.length === 2).to.deep.equal(true);
    chai.expect(output.includes(11)).to.deep.equal(true);
    chai.expect(output.includes(-1)).to.deep.equal(true);
  });
});
