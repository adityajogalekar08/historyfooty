import React, { PureComponent } from "react";
import info from "../assets/json/table1993-94.json";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
/*function exampleBar(){
  let position = null
  let teams = null
  const listitem = data.map((numb)=>{
    position = numb.Pos
    teams = numb.Team
  });
  return listitem
}
*/
function ExampleBar() {
	const data2 = info;
	console.log(data2);
	return (
		<ResponsiveContainer width="100%" minheight={400}>
			<BarChart data={data2}>
				<CartesianGrid />
				<XAxis dataKey="Abbr" />
				<YAxis />
				<Tooltip />
				<Bar dataKey="Pts" fill="#00dd00" />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default ExampleBar;
