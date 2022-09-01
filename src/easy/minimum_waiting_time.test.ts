import * as chai from "chai";
import { minimumWaitingTime } from "./minimum_waiting_time";

describe("Minimum Waiting Time", () => {
  it("Test Case #1", function () {
    const queries = [3, 2, 1, 2, 6];
    // [1, 2, 2, 3]
    // [0, 1, 1+2=3, 3+2=5, 5+3=8] -> 1+3+5+8 = 17
    const expected = 17;
    const actual = minimumWaitingTime(queries);
    chai.expect(actual).to.deep.equal(expected);
  });
});
