import React from "react";
import "./HomePage.css";
import { teams } from "../extract";

const TeamCards = (props) => {
	const teamsList = teams();
	return teamsList.map((item, i) => {
		if (props.activeTeam === item.teamName) {
			return (
				<li
					className="team-card team-card-appear"
					value="nameeee"
					key={i}
					onClick={props.changeTeam}
					data-id={item.teamName}
					style={{
						animationDelay: `${i * 40}ms`,
						minHeight: "90px",
						borderBottom: "2px solid white",
					}}
				>
					<p className="ssp-400 team-name" style={{ fontSize: "21px" }}>
						{item.teamName}
					</p>
				</li>
			);
		}
		return (
			<li
				className="team-card team-card-appear"
				value="nameeee"
				key={i}
				onClick={props.changeTeam}
				data-id={item.teamName}
				style={{
					animationDelay: `${i * 40}ms`,
				}}
			>
				<p className="ssp-400 team-name">{item.teamName}</p>
			</li>
		);
	});
};
const Teams = (props) => {
	return (
		<div className="team-cards-container">
			<TeamCards
				activeTeam={props.activeTeam}
				changeTeam={props.changeTeamContext}
			/>
		</div>
	);
};

export default Teams;
