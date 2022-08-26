type Team = string;
type HomeTeam = Team;
type AwayTeam = Team;
export type Competition = [HomeTeam, AwayTeam];
export type Result = 0 | 1;
type Winner = Team;
type Points = number;

type Index = number;
type Length = number;

// Assuming competitions are fixed arrays,
// O(N) T | O(K) S (benefits of using a map)
export const tournamentWinner = (
  competitions: Competition[],
  results: Result[]
): Winner => {
  const numberOfCompetitions: Length = results.length;
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

    // Improvement: Could have incorporated the best team here and into the map
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
