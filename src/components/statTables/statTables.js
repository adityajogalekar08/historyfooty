import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./statTables.css";
import jsonData from "../assets/json/epl2021.json";

export const Stocks = () => {
	return (
		<>
			<div className="stock-container">
				<table>
					<tr className="tr">
						<td className="td1">
							<p>Premier League 2020-21</p>
						</td>
						<td className="td1"></td>
						<td className="td1"></td>
					</tr>
					<tr>
						<td>
							<th>Team</th>
						</td>
						<td>
							<th>Year</th>
						</td>
						<td>
							<th>Nickname</th>
						</td>
					</tr>
				</table>
				{jsonData.map((data, key) => {
					return (
						<div key={key}>
							<Stock
								id={key}
								team={data.team}
								year={data.year}
								nickname={data.nickname}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
const HomePageHeader = () => {
	return (
		<Container fluid className="header">
			Premier League 2020-21
		</Container>
	);
};
const Stock = ({ team, year, nickname }) => {
	return (
		<table>
			<tr>
				<td>{team}</td>
				<td>{year}</td>
				<td>{nickname}</td>
			</tr>
		</table>
	);
};

export default Stocks;
