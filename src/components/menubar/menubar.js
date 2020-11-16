import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./menubar.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../components/globalStyles";
import { lightTheme, darkTheme } from "../../components/Themes";

import { FaRegMoon as Moon } from "react-icons/fa";
function MenuBar() {
	const [theme, setTheme] = useState("light");
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />

				<Container fluid className="appheader">
					<Navbar expand="lg" bsPrefix="navbar">
						<Navbar.Brand bsPrefix="title">Title</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text bsPrefix="title">
								<button onClick={themeToggler} className="cssMode">
									<Moon className="moon" />
								</button>
							</Navbar.Text>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</>
		</ThemeProvider>
	);
}
export default MenuBar;
