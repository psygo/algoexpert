import * as chai from "chai";
import { moveElementToEnd } from "./move_element_to_end";

describe("Move Element to End", () => {
  // it("Test Case #1", function () {
  //   const array = [2, 1, 2, 2, 2, 3, 4, 2];
  //   const toMove = 2;
  //   const expectedStart = [1, 3, 4];
  //   const expectedEnd = [2, 2, 2, 2, 2];
  //   const output = moveElementToEnd(array, toMove);
  //   const outputStart = sorted(output.slice(0, 3));
  //   const outputEnd = output.slice(3);
  //   chai.expect(outputStart).to.deep.equal(expectedStart);
  //   chai.expect(outputEnd).to.deep.equal(expectedEnd);
  // });

  it("Test Case #2", function () {
    const array = [1, 2, 4, 5, 3];
    const toMove = 3;
    const expectedStart = [1, 2, 4, 5];
    const expectedEnd = [3];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 3));
    const outputEnd = output.slice(3);
    chai.expect(outputStart).to.deep.equal(expectedStart);
    chai.expect(outputEnd).to.deep.equal(expectedEnd);
  });

  const sorted = (array: number[]) => array.sort((a, b) => a - b);
});
