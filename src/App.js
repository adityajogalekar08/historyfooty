import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import BarGraphs from "./components/graphs/BarGraphs";
import HomePage from "./components/homepage/HomePage";
import ButtonPages from "./components/maincomponents/buttons/ButtonPages";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./components/menubar/menubar";
import React from "react";
function App() {
	return (
		<>
			<Router>
				<MenuBar></MenuBar>
				<ButtonPages></ButtonPages>

				<BarGraphs></BarGraphs>

				<HomePage />
			</Router>
		</>
	);
}

export default App;
