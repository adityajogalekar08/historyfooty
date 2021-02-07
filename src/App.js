import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import Dashboard from "./components/dashboard/AllStats";
import TennisInfo from "./components/tennis/tennisInfo";
import { Button } from "react-bootstrap";
import HomePage from "./components/homepage/HomePage";
import AllData from "./components/dashboard/AllData";
function App() {
	return (
		<>
			<Router>
				<AllData></AllData>
				{/*	<Link to="/epl" className="linkButtons">
					<Button bsPrefix="linkButtons">MAN UTD</Button>
				</Link>
				<Link to="/tennis" className="linkButtons">
					<Button bsPrefix="linkButtons">TENNIS</Button>
				</Link>
				<Switch>
					<Route extact path="/" />
					<Route extact path="/epl" component={Dashboard} />
					<Route extact path="/tennis" component={TennisInfo} />
				</Switch>
				*/}
			</Router>
		</>
	);
}

export default App;
