import * as chai from "chai";
import { isPalindrome } from "./palindrome_check";

describe("Palindrome Check", () => {
  it("Test Case #1", function () {
    chai.expect(isPalindrome("abcdcba")).to.deep.equal(true);
  });
});
