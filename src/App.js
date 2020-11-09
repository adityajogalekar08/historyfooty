import "bootstrap/dist/css/bootstrap.min.css";
import BarGraphs from "./components/graphs/BarGraphs";
import HomePage from "./components/homepage/HomePage";
import ButtonPages from "./components/maincomponents/buttons/ButtonPages";
import Cards from "./components/maincomponents/cards/cards";
import MenuBar from "./components/menubar/menubar";

function App() {
	return (
		<>
			<MenuBar></MenuBar>
			<ButtonPages></ButtonPages>

			<BarGraphs></BarGraphs>

			<HomePage />
		</>
	);
}

export default App;
