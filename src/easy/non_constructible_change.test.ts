import * as chai from "chai";
import { nonConstructibleChange } from "./non_constructible_change";

it("Test Case #1", function () {
  const input = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20;
  const actual = nonConstructibleChange(input);
  chai.expect(actual).to.deep.equal(expected);
});
