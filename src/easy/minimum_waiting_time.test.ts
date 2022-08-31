import * as chai from "chai";
import { minimumWaitingTime } from "./minimum_waiting_time";

describe("Minimum Waiting Time", () => {
  it("Test Case #1", function () {
    const queries = [3, 2, 1, 2, 6];
    const expected = 17;
    const actual = minimumWaitingTime(queries);
    chai.expect(actual).to.deep.equal(expected);
  });
});
