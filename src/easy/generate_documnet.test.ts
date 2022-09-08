import * as chai from "chai";
import { generateDocument } from "./generate_documnet";

describe("Generate Document", () => {
  it("Test Case #1", function () {
    const characters = "Bste!hetsi ogEAxpelrt x ";
    const document = "AlgoExpert is the Best!";
    const expected = true;
    const actual = generateDocument(characters, document);
    chai.expect(actual).to.deep.equal(expected);
  });
});
