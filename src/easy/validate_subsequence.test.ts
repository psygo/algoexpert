import * as chai from "chai";

import {
  isValidSubsequence,
  isValidSubsequenceClem,
} from "./validate_subsequence";

describe("Validate Subsequence", () => {
  it("Test Case #1", () => {
    const array1: number[] = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence1: number[] = [1, 6, -1];

    chai.expect(isValidSubsequence(array1, sequence1)).to.deep.equal(true);
  });

  it("Test Case #2", function () {
    const array2 = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence2 = [1, 6, -1, 10];
    chai.expect(isValidSubsequence(array2, sequence2)).to.deep.equal(true);
  });

  it("Clem | Test Case #1", () => {
    const array1: number[] = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence1: number[] = [1, 6, -1];

    chai.expect(isValidSubsequenceClem(array1, sequence1)).to.deep.equal(true);
  });

  it("Clem | Test Case #2", function () {
    const array2 = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence2 = [1, 6, -1, 10];
    chai.expect(isValidSubsequenceClem(array2, sequence2)).to.deep.equal(true);
  });
});
