import "bootstrap/dist/css/bootstrap.min.css";
import BarGraphs from "./components/graphs/BarGraphs";
import HomePage from "./components/homepage/HomePage";
import ButtonPages from "./components/maincomponents/buttons/ButtonPages";
import Cards from "./components/maincomponents/cards/cards";
import MenuBar from "./components/menubar/menubar";
import { Stocks } from "./components/statTables/statTables";

function App() {
	return (
		<>
			<MenuBar></MenuBar>
			<ButtonPages></ButtonPages>

			<BarGraphs></BarGraphs>

			<HomePage />
			<Stocks></Stocks>
		</>
	);
}

export default App;
