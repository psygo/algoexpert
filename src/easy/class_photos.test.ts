import * as chai from "chai";
import { classPhotos } from "./class_photos";

describe("Class Photos", () => {
  it("Test Case #1", function () {
    const redShirtHeights = [5, 8, 1, 3, 4];
    // Ordered Red:  [1, 3, 4, 5, 8]
    const blueShirtHeights = [6, 9, 2, 4, 5];
    // Ordered Blue: [2, 4, 5, 6, 9]
    const expected = true;
    const actual = classPhotos(redShirtHeights, blueShirtHeights);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #2", function () {
    const redShirtHeights = [6];
    const blueShirtHeights = [6];
    const expected = false;
    const actual = classPhotos(redShirtHeights, blueShirtHeights);
    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #3", function () {
    const redShirtHeights = [5, 4];
    const blueShirtHeights = [4, 5];
    const expected = false;
    const actual = classPhotos(redShirtHeights, blueShirtHeights);
    chai.expect(actual).to.deep.equal(expected);
  });
});
