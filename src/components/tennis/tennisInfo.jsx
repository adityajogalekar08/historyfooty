import React from "react";
import "./tennisInfo.css";
import Tennisdata from "./openERA.json";
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
const data = Tennisdata;

function TennisInfo() {
	return (
		<>
			<div className="tenniswrapper">
				<section className="tennis-top-container">
					<div className="aus">
						{" "}
						<p className="category">Australian Open</p>
						<ResponsiveContainer
							width="100%"
							maxwidth="500"
							minheight={400}
							height={300}
						>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis
									dataKey="abbr"
									label={{
										value: "abbr",
										position: "insideBottomRight",
										dy: 10,
									}}
								/>
								<YAxis />
								<Tooltip />
								<Bar dataKey="aus" fill="#1e8fd5" />
							</BarChart>
						</ResponsiveContainer>
					</div>

					<div className="fra">
						{" "}
						<p className="category">French Open</p>
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="abbr" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="fra" fill="#e3783b" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="wim">
						{" "}
						<p className="category">Wimbledon</p>
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="abbr" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="wim" fill="#84b118" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="usa">
						{" "}
						<p className="category">US Open</p>
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="abbr" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="usa" fill="#3c638e" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="grandslams">
						{" "}
						<p className="category">Most Grandslams</p>
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="abbr" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="grandslamTitles" fill="#FFB700" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="finals">
						{" "}
						<p className="category">Most Finals</p>
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="abbr" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="finals" fill="#5C2B2E" />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</section>
			</div>
		</>
	);
}
export default TennisInfo;
