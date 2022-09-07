import * as chai from "chai";
import { binarySearch } from "./binary_search";

describe("Binary Search", () => {
  it("Test Case #1", function () {
    chai
      .expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
      .to.deep.equal(3);
  });

  it("Test Case #2", function () {
    chai.expect(binarySearch([], 1)).to.deep.equal(-1);
  });

  it("Test Case #3", function () {
    chai.expect(binarySearch([1], 1)).to.deep.equal(0);
  });

  it("Test Case #4", function () {
    chai.expect(binarySearch([0, 0, 1, 3], 1)).to.deep.equal(2);
  });

  it("Test Case #5", function () {
    chai.expect(binarySearch([1, 5, 23, 111], 111)).to.deep.equal(3);
  });

  it("Test Case #6", function () {
    chai
      .expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73))
      .to.deep.equal(9);
  });
});
