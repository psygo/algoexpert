import * as chai from "chai";
import { Competition, Result, tournamentWinner } from "./tournament_winner";

describe("Tournament Winner", () => {
  it("Test Case #1", () => {
    const competitions: Competition[] = [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ];
    const results: Result[] = [0, 0, 1];
    const expected = "Python";
    const actual = tournamentWinner(competitions, results);

    chai.expect(actual).to.deep.equal(expected);
  });

  it("Test Case #1", () => {
    const competitions: Competition[] = [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
    ];
    const results: Result[] = [0, 1, 1];
    const expected = "Java";
    const actual = tournamentWinner(competitions, results);

    chai.expect(actual).to.deep.equal(expected);
  });
});
