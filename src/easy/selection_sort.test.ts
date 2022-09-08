import * as chai from "chai";
import { selectionSort } from "./selection_sort";

describe("Selection Sort", () => {
  it("Test Case #1", function () {
    const input = [8, 5, 2, 9, 5, 6, 3];
    chai.expect(selectionSort(input)).to.deep.equal([2, 3, 5, 5, 6, 8, 9]);
  });
});
