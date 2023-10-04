let teamAScore = 0;
let teamBScore = 0;

function incrementScore(team, points) {
    if (team === 'teamA') {
        teamAScore += points;
        document.getElementById('teamAScore').textContent = teamAScore;
    } else if (team === 'teamB') {
        teamBScore += points;
        document.getElementById('teamBScore').textContent = teamBScore;
    }
}
