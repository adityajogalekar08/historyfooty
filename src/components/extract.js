import data from "./assets/json/unitedvsall.json";
console.log("data :", data);
// Return opposition teams
const teams = () => {
	const teams = new Set([]);
	let teamStats = [];
	for (let i = 0; i < data.length; i++) {
		teams.add(data[i].club);
		console.log("abc:", teams);
	}

	teams.forEach((team) => {
		return teamStats.push({
			teamName: team,
		});
	});
	/*
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < teamStats.length; j++) {
			if (teamStats[j].teamName === data[i].opposition) {
				teamStats[j].matches++;
			}
		}
	}

	let sortedTeamDetails = teams.sort((a, b) => {
		let nameA = a.club.replace(/\.| /g, "").toLowerCase();
		let nameB = b.club.replace(/\.| /g, "").toLowerCase();
		let comparison = 0;
		if (nameA > nameB) {
			comparison = 1;
		} else if (nameA < nameB) {
			comparison = -1;
		}
		return comparison;
	});
    console.log("sortedTeamDetails:", sortedTeamDetails);
    */
	console.log("the teams are :", teamStats);
	return teamStats;
};

const getSummarizedStats = (team) => {
	/*
	let totalRuns = 0;
	let totalCatches = 0;
	let totalWickets = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i].opposition === team) {
			if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
				totalRuns += parseInt(data[i].batting_score, 10);
			}
			if (data[i].wickets !== "-") {
				totalWickets += parseInt(data[i].wickets, 10);
			}
			if (data[i].catches !== "-") {
				totalCatches += parseInt(data[i].catches, 10);
			}
		}
	}
    return { totalRuns, totalCatches, totalWickets };
    */
	let gamesPlayed = 0;
	let gamesWon = 0;
	let gamesDraw = 0;
	let gamesLost = 0;
	let goalsFor = 0;
	let goalsAgainst = 0;
	let winPercentage = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i].club === team) {
			gamesPlayed = parseInt(data[i].played);
			gamesWon = parseInt(data[i].won);
			gamesDraw = parseInt(data[i].draw);
			gamesLost = parseInt(data[i].lost);
			goalsFor = parseInt(data[i].for);
			goalsAgainst = parseInt(data[i].against);
			winPercentage = parseInt(data[i].winPercentage);
		}
	}
	return {
		gamesPlayed,
		gamesWon,
		gamesDraw,
		gamesLost,
		goalsFor,
		goalsAgainst,
		winPercentage,
	};
};
export { teams, getSummarizedStats };
