import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ButtonPages.css";

function ButtonPages() {
	return (
		<>
			<div>
				<Container fluid>
					<Row bsPrefix="row">
						<Col>
							<Link to="/epl" className="eng">
								<Button bsPrefix="eng">English Premier League</Button>
							</Link>
						</Col>
						<Col>
							<Link to="/epl" className="eng">
								<Button bsPrefix="ita">Italian</Button>
							</Link>
						</Col>
						<Col>
							<Link to="/epl" className="eng">
								<Button bsPrefix="ger">BundesLiga</Button>
							</Link>
						</Col>
						<Col>
							<Link to="/epl" className="eng">
								<Button bsPrefix="esp">La LIGA</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default ButtonPages;
