import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./statTables.css";
import jsonData from "../assets/json/epl2021.json";

export const Stocks = () => {
	return (
		<>
			<HomePageHeader />
			<div className="stock-container">
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
	return <header className="header">Premier League 2020-21</header>;
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
