import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./components/homepage/HomePage";
import ButtonPages from "./components/maincomponents/buttons/ButtonPages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuBar from "./components/menubar/menubar";
import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import statTables from "./components/statTables/statTables";
import Dashboard from "./components/dashboard/dashboard.js";
import BarGraphs from "./components/graphs/BarGraphs";
function App() {
	return (
		<>
			<Router>
				<Dashboard />
				{/*
				
				<MenuBar></MenuBar>
				<ButtonPages></ButtonPages>
				<Switch>
					<Route extact path="/" />
					<Route extact path="/epl" component={statTables} />
				</Switch>
				*/}
			</Router>
		</>
	);
}

export default App;
