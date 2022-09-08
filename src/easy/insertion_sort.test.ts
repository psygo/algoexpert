import * as chai from "chai";
import { insertionSort } from "./insertion_sort";

describe("Insertion Sort", () => {
  it("Test Case #1", function () {
    const input = [8, 5, 2, 9, 5, 6, 3];
    chai.expect(insertionSort(input)).to.deep.equal([2, 3, 5, 5, 6, 8, 9]);
  });
});
