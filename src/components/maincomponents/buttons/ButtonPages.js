import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ButtonPages.css";

function ButtonPages() {
	return (
		<>
			<div>
				<Container fluid>
					<Row className="row">
						<Col>
							<Button className="eng">English Premier League</Button>
						</Col>
						<Col>
							<Button className="ita">Italian Serie A</Button>
						</Col>
						<Col>
							<Button className="ger">BundesLiga</Button>
						</Col>
						<Col>
							<Button className="esp">La LIGA</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default ButtonPages;
