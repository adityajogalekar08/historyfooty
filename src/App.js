import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import Dashboard from "./components/dashboard/AllStats";
import TennisInfo from "./components/tennis/tennisInfo";
import { Button } from "react-bootstrap";
import HomePage from "./components/homepage/HomePage";
import AllData from "./components/dashboard/AllData";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
	return (
		<>
			<Router>
				{" "}
				<AllData></AllData>
			</Router>
		</>
	);
}

export default App;
