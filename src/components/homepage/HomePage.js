import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import BarGraphs from "../graphs/BarGraphs";
function HomePage() {
	return (
		<>
			<div>
				<Container fluid>
					<Row className="row">
						<Col className="col1">
							<BarGraphs></BarGraphs>
						</Col>
						<Col></Col>
						<Col></Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default HomePage;
