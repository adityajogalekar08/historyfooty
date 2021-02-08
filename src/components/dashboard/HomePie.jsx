import React from "react";
import "../homepage/HomePage.css";
import { getSummarizedStats } from "../extract";
import * as Recharts from "recharts";

const { PieChart, Pie, Cell } = Recharts;

const HomePieChart = (props) => {
	const result = getSummarizedStats(props.team);
	const data = [
		{ name: "Wins", value: result.homeGamesWon },
		{ name: "Loses", value: result.homeGamesLost },
		{ name: "Draw", value: result.homeGamesDraw },
	];

	const COLORS = ["#4ab171", "#ff0000", "#f3ae4e"];

	return (
		<React.Fragment>
			<span
				className="ssp-400"
				style={{
					position: "absolute",
					top: "15px",
					left: "30px",
					fontSize: "20px",
					marginBottom: "10px",
				}}
			>
				Home
			</span>
			<PieChart width={400} height={400} className="ssp-700">
				<Pie
					data={data}
					cx={190}
					cy={200}
					innerRadius={60}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
					paddingAngle={5}
					label
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							dataKey={entry.value}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
			<div className="pie-info">
				<div
					className="ssp-400"
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<div
						className="pie-color"
						style={{ backgroundColor: "#4ab171", marginRight: "10px" }}
					/>
					Won
				</div>
				<div
					className="ssp-400"
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<div
						className="pie-color"
						style={{ backgroundColor: "#ff0000", marginRight: "10px" }}
					/>
					Lost
				</div>
				<div
					className="ssp-400"
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<div
						className="pie-color"
						style={{ backgroundColor: "#f3ae4e", marginRight: "10px" }}
					/>
					Draw
				</div>
			</div>
		</React.Fragment>
	);
};

export default HomePieChart;
