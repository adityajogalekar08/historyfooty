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
console.log("TennisDATA:-", data);
function TennisInfo() {
	return (
		<>
			<div className="tenniswrapper">
				<section className="tennis-top-container">
					<div className="aus">
						{" "}
						<ResponsiveContainer
							width="100%"
							maxwidth="500"
							minheight={400}
							height={300}
						>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="aus" fill="#1e8fd5" />
							</BarChart>
						</ResponsiveContainer>
					</div>

					<div className="fra">
						{" "}
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="fra" fill="#e3783b" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="wim">
						{" "}
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="wim" fill="#84b118" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="usa">
						{" "}
						<ResponsiveContainer width="100%" minheight={400} height={300}>
							<BarChart data={Tennisdata}>
								<CartesianGrid />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="usa" fill="#3c638e" />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</section>
			</div>
		</>
	);
}
export default TennisInfo;
