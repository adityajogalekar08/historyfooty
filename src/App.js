import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import Dashboard from "./components/dashboard/dashboard";
import TennisInfo from "./components/tennis/tennisInfo";
import { Button } from "react-bootstrap";
function App() {
	return (
		<>
			<Router>
				<Link to="/epl" className="eng">
					<Button bsPrefix="eng">MAN UTD</Button>
				</Link>
				<Link to="/tennis" className="eng">
					<Button bsPrefix="eng">TENNIS</Button>
				</Link>
				<Switch>
					<Route extact path="/" />
					<Route extact path="/epl" component={Dashboard} />
					<Route extact path="/tennis" component={TennisInfo} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
