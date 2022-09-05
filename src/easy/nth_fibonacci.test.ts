import * as chai from "chai";
import { getNthFib, getNthFibFixed, getNthFibMemoized } from "./nth_fibonacci";

describe("Nth Fibonacci", () => {
  it("Test Case #1", function () {
    chai.expect(getNthFib(6)).to.deep.equal(5);
  });

  it("Test Case #2", function () {
    chai.expect(getNthFib(2)).to.deep.equal(1);
  });

  it("Test Case #3", function () {
    chai.expect(getNthFib(3)).to.deep.equal(1);
  });

  it("Test Case #4", function () {
    chai.expect(getNthFib(4)).to.deep.equal(2);
  });

  it("Test Case #5", function () {
    chai.expect(getNthFib(5)).to.deep.equal(3);
  });

  it("Memoized | Test Case #1", function () {
    chai.expect(getNthFibMemoized(6)).to.deep.equal(5);
  });

  it("Fixed | Test Case #1", function () {
    chai.expect(getNthFibFixed(6)).to.deep.equal(5);
  });
});
