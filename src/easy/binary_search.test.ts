import * as chai from "chai";
import { binarySearch } from "./binary_search";

it("Test Case #1", function () {
  chai
    .expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
    .to.deep.equal(3);
});
