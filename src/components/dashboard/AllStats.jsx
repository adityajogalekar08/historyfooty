import React from "react";
import "../homepage/HomePage.css";
import { getSummarizedStats } from "../extract";

const AllStats = (props) => {
	const res = getSummarizedStats(props.team);
	return (
		<div className="allstats">
			<header className="ssp-300 allstats-headline">
				Man Utd vs {props.team}
			</header>

			<section className="single-insight-cards">
				<div className="details played ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Played</span>
					{res.gamesPlayed}
				</div>
				<div className="details won ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Won</span>
					{res.gamesWon}
				</div>
				<div className="details draw ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Draw</span>
					{res.gamesDraw}
				</div>
				<div className="details lost ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Lost</span>
					{res.gamesLost}
				</div>
				<div className="details for ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>For</span>
					{res.goalsFor}
				</div>
				<div className="details against ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Against</span>
					{res.goalsAgainst}
				</div>
			</section>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default AllStats;
