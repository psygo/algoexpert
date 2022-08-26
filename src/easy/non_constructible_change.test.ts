import * as chai from "chai";
import {
  Coin,
  nonConstructibleChange,
  nonConstructibleChangeTim,
} from "./non_constructible_change";

describe("Non-Constructible Change", () => {
  it("Test Case #1", function () {
    const input: Coin[] = [];
    const expected = 1;
    const actual = nonConstructibleChange(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #2", function () {
    const input: Coin[] = [1];
    const expected = 2;
    const actual = nonConstructibleChange(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #3", function () {
    const input: Coin[] = [1, 2];
    const expected = 4;
    const actual = nonConstructibleChange(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #2", function () {
    const input: Coin[] = [1, 2, 3];
    const expected = 7;
    const actual = nonConstructibleChange(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #3", function () {
    const input: Coin[] = [5, 7, 1, 1, 2, 3, 22];
    const expected = 20;
    const actual = nonConstructibleChange(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  // Tim's Solution

  it("Tim's Solution | Test Case #1", function () {
    const input: Coin[] = [];
    const expected = 1;
    const actual = nonConstructibleChangeTim(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Tim's Solution | Test Case #2", function () {
    const input: Coin[] = [1];
    const expected = 2;
    const actual = nonConstructibleChangeTim(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Tim's Solution | Test Case #3", function () {
    const input: Coin[] = [1, 2];
    const expected = 4;
    const actual = nonConstructibleChangeTim(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Tim's Solution | Test Case #2", function () {
    const input: Coin[] = [1, 2, 3];
    const expected = 7;
    const actual = nonConstructibleChangeTim(input);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #3", function () {
    const input: Coin[] = [5, 7, 1, 1, 2, 3, 22];
    const expected = 20;
    const actual = nonConstructibleChangeTim(input);
    chai.expect(actual).to.deep.equal(expected);
  });
});
