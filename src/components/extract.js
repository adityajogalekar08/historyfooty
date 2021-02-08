import data from "./assets/json/unitedvsall.json";
console.log("data :", data);
// Return opposition teams
const teams = () => {
	const teams = new Set([]);
	let teamStats = [];
	for (let i = 0; i < data.length; i++) {
		teams.add(data[i].club);
	}

	teams.forEach((team) => {
		return teamStats.push({
			teamName: team,
		});
	});

	return teamStats;
};
// summarized total stats
const getSummarizedStats = (team) => {
	let homeGamesPlayed = 0;
	let homeGamesWon = 0;
	let homeGamesLost = 0;
	let homeGamesDraw = 0;
	let awayGamesPlayed = 0;
	let awayGamesWon = 0;
	let awayGamesLost = 0;
	let awayGamesDraw = 0;
	let totalGamesPlayed = 0;
	let totalGamesWon = 0;
	let totalGamesDraw = 0;
	let totalGamesLost = 0;
	let totalGoalsFor = 0;
	let totalGoalsAgainst = 0;
	let winPercentage = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i].club === team) {
			homeGamesPlayed = parseInt(data[i].playedHome);
			homeGamesWon = parseInt(data[i].wonHome);
			homeGamesLost = parseInt(data[i].lostHome);
			homeGamesDraw = parseInt(data[i].drawHome);
			awayGamesPlayed = parseInt(data[i].playedAway);
			awayGamesWon = parseInt(data[i].wonAway);
			awayGamesLost = parseInt(data[i].lostAway);
			awayGamesDraw = parseInt(data[i].drawAway);
			totalGamesPlayed = parseInt(data[i].playedTotal);
			totalGamesWon = parseInt(data[i].wonTotal);
			totalGamesDraw = parseInt(data[i].drawTotal);
			totalGamesLost = parseInt(data[i].lostTotal);
			totalGoalsFor = parseInt(data[i].forTotal);
			totalGoalsAgainst = parseInt(data[i].againstTotal);
			winPercentage = parseInt(data[i].winPercentage);
		}
	}
	return {
		homeGamesPlayed,
		homeGamesWon,
		homeGamesLost,
		homeGamesDraw,
		awayGamesPlayed,
		awayGamesWon,
		awayGamesLost,
		awayGamesDraw,
		totalGamesPlayed,
		totalGamesWon,
		totalGamesDraw,
		totalGamesLost,
		totalGoalsFor,
		totalGoalsAgainst,
		winPercentage,
	};
};

export { teams, getSummarizedStats };
