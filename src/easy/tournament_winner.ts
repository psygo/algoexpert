type Team = string;
type HomeTeam = string;
type AwayTeam = string;
export type Competition = [HomeTeam, AwayTeam];
export type Result = 0 | 1;
type Winner = string;
type Points = number;

type Index = number;
type Length = number;

// O(N) T | O(N) S
export const tournamentWinner = (
  competitions: Competition[],
  results: Result[]
): Winner => {
  const numberOfCompetitions: Length = results.length;
  let currentAmountOfPoints: Points = 0;
  const pointsTable: Map<Team, Points> = new Map<Team, Points>();

  for (let i: Index = 0; i < numberOfCompetitions; i++) {
    const currentResult: Result = results[i];

    const homeTeam: HomeTeam = competitions[i][0];
    const currentHomeTeamPoints: Points = (
      pointsTable.get(homeTeam) ? pointsTable.get(homeTeam) : 0
    )!;
    const awayTeam: AwayTeam = competitions[i][1];
    const currentAwayTeamPoints: Points = (
      pointsTable.get(awayTeam) ? pointsTable.get(awayTeam) : 0
    )!;

    currentResult === 1
      ? pointsTable.set(homeTeam, currentHomeTeamPoints + 3)
      : pointsTable.set(awayTeam, currentAwayTeamPoints + 3);

    currentAmountOfPoints += 3;
  }

  let winner: Team;
  let currentHighestPoints: Points = 0;
  for (let [team, teamPoints] of pointsTable) {
    if (teamPoints > currentHighestPoints) {
      winner = team;
      currentHighestPoints = teamPoints;
    }
  }

  return winner!;
};
