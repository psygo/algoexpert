import * as chai from "chai";
import { firstNonRepeatingCharacter } from "./first_non_repeating_character";

describe("First Non-Repeating Character", () => {
  it("Test Case #1", function () {
    const input = "abcdcaf";
    const expected = 1;
    const actual = firstNonRepeatingCharacter(input);
    chai.expect(actual).to.deep.equal(expected);
  });
});
