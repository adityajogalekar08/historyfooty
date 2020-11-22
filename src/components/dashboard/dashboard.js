import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./dashboard.css";
import "../../App.css";
import BarGraphs from "../graphs/BarGraphs";

function dasboard() {
	return (
		<>
			<div className="parentDIV"></div>
			<Container fluid className="mainContainer">
				Dashboard
				<Row className="mainRow1">
					<Col bsPrefix="mainCol1">Club: Manchester United</Col>
					<Col bsPrefix="mainCol2"></Col>
				</Row>
				<Row className="mainRow1">
					<Col bsPrefix="c2c1">1</Col>
					<Col bsPrefix="c2c2">
						<Row className="r1">
							<Col bsPrefix="c1">1</Col>
							<Col bsPrefix="c1">2</Col>
						</Row>
						<Row className="r1">
							<Col bsPrefix="c1">1</Col>
							<Col bsPrefix="c1">2</Col>
						</Row>
					</Col>
					<Col bsPrefix="c2c3"></Col>
				</Row>
			</Container>
		</>
	);
}
export default dasboard;
