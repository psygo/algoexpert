import * as chai from "chai";
import { classPhotos } from "./class_photos";

describe("Class Photos", () => {
  it("Test Case #1", function () {
    const redShirtHeights = [5, 8, 1, 3, 4];
    const blueShirtHeights = [6, 9, 2, 4, 5];
    const expected = true;
    const actual = classPhotos(redShirtHeights, blueShirtHeights);
    chai.expect(actual).to.deep.equal(expected);
  });
});
