import * as chai from "chai";
import { tandemBicycle } from "./tandem_bicycle";

describe("Tandem Bicycle", () => {
  it("Test Case #1", function () {
    const redShirtSpeeds = [5, 5, 3, 9, 2];
    const blueShirtSpeeds = [3, 6, 7, 2, 1];
    const fastest = true;
    const expected = 32;
    const actual = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
    chai.expect(actual).to.deep.equal(expected);
  });
});
