import React from "react";
import "../homepage/HomePage.css";
import { getSummarizedStats } from "../extract";
import HomePieChart from "./HomePie";
import AwayPieChart from "./AwayPie";

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
					{res.totalGamesPlayed}
				</div>
				<div className="details won ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Won</span>
					{res.totalGamesWon}
				</div>
				<div className="details draw ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Draw</span>
					{res.totalGamesDraw}
				</div>
				<div className="details lost ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Lost</span>
					{res.totalGamesLost}
				</div>
				<div className="details for ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>For</span>
					{res.totalGoalsFor}
				</div>
				<div className="details against ssp-400">
					<span style={{ fontSize: "18px", color: "white" }}>Against</span>
					{res.totalGoalsAgainst}
				</div>
			</section>
			<br />
			<br />
			<section className="dual-row">
				<div className="dual-boxes">
					<HomePieChart team={props.team} />
				</div>
				<div className="dual-boxes radar">
					<AwayPieChart team={props.team} />
				</div>
			</section>

			<br />
			<br />
		</div>
	);
};

export default AllStats;
