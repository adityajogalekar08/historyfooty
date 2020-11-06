import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./menubar.css";
function MenuBar() {
	return (
		<>
			<Container fluid className="appheader">
				<Navbar expand="lg" className="navbar">
					<Navbar.Brand bsPrefix="title">Title</Navbar.Brand>
				</Navbar>
			</Container>
		</>
	);
}
export default MenuBar;
