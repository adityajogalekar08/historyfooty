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

export default teams;
