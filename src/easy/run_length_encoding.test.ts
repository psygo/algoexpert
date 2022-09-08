import * as chai from "chai";
import { runLengthEncoding } from "./run_length_encoding";

describe("Run-Length Encoding", () => {
  // it("Test Case #1", function () {
  //   const string = "AAAAAAAAAAAAABBCCCCDD";
  //   const expected = "9A4A2B4C2D";
  //   const actual = runLengthEncoding(string);
  //   chai.expect(actual).to.deep.equal(expected);
  // });

  it("Test Case #2", function () {
    const string = "aA";
    const expected = "1a1A";
    const actual = runLengthEncoding(string);
    chai.expect(actual).to.deep.equal(expected);
  });
});
