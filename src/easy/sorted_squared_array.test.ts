import * as chai from "chai";
import {
  sortedSquaredArray,
  sortedSquaredArrayMoreEfficient,
} from "./sorted_squared_array";

describe("Sorted Squared Array", () => {
  it("Test Case #1", function () {
    const input = [1, 2, 3, 5, 6, 8, 9];
    const expected = [1, 4, 9, 25, 36, 64, 81];
    const actual = sortedSquaredArray(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #2", function () {
    const input = [-2, -1];
    const expected = [1, 4];
    const actual = sortedSquaredArray(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #3", function () {
    const input = [-10, -5, 0, 5, 10];
    const expected = [0, 25, 25, 100, 100];
    const actual = sortedSquaredArray(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("More Efficient | Test Case #1", function () {
    const input = [1, 2, 3, 5, 6, 8, 9];
    const expected = [1, 4, 9, 25, 36, 64, 81];
    const actual = sortedSquaredArrayMoreEfficient(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("More Efficient | Test Case #2", function () {
    const input = [-2, -1];
    const expected = [1, 4];
    const actual = sortedSquaredArrayMoreEfficient(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("More Efficient | Test Case #3", function () {
    const input = [-10, -5, 0, 5, 10];
    const expected = [0, 25, 25, 100, 100];
    const actual = sortedSquaredArrayMoreEfficient(input);
    chai.expect(actual).to.deep.equal(expected);
  });
});
