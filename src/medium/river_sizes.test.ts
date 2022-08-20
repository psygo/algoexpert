import * as chai from "chai";

import { riverSizes } from "./river_sizes";

describe("River Sizes", () => {
  it("Test Case #1", function () {
    const testInput = [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
    ];
    const expected = [1, 2, 2, 2, 5];
    chai
      .expect(riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("Test Case #2", function () {
    const testInput = [
      [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ];
    const expected = [1, 1, 2, 2, 5, 21];
    chai
      .expect(riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });
});
