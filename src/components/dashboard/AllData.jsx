import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../homepage/HomePage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../homepage/HomePage";
import AllStats from "./AllStats";

library.add(faChevronLeft);
export default class AllData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTeam: "Accrington",
		};
		this.setTeam = this.setTeam.bind(this);
	}

	setTeam(data) {
		this.setState({
			selectedTeam: data.currentTarget.dataset.id,
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className="dashboard-placeholder ssp-300">
					To view dashboard switch to larger device
				</div>

				<div className="dashboard-container">
					<div className="teams-container">
						<HomePage
							activeTeam={this.state.selectedTeam}
							changeTeamContext={this.setTeam}
						/>
						<AllStats team={this.state.selectedTeam} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
