import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./cards.css";
import epl from "./images/eplLogo.png";
import lal from "./images/laliga.png";
import bun from "./images/bundes.png";
import ita from "./images/seriea.svg";
function Cards() {
	/*const cardimages = [
		{ text: "EPL", title: "EPL" },
		{
			text: "EPL",
			title: "LA LIGA",
		},
		{ text: "EPL", title: "Serie A" },
		{ text: "EPL", title: "BundesLiga" },
	];
	const renderCards = (card, index) => {
		return (
			<>
				<div fluid className="grid-container">
					<div key={index}>
						<Card style={{ width: "10em" }}>
							<Card.Body>
								<Card.Title>{card.title}</Card.Title>
								<Card.Text>{card.text}</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
			</>
		);
	};
*/
	return (
		<>
			<Container fluid>
				<Row>
					<Col bsPrefix="gridCol">
						<Card style={{ width: "18em" }}>
							<Card.Img variant="top" src={epl} />
						</Card>
					</Col>
					<Col bsPrefix="gridCol">
						<Card style={{ width: "18em" }}>
							<Card.Img variant="top" src={ita} />
						</Card>
					</Col>
					<Col bsPrefix="gridCol">
						<Card style={{ width: "18em" }}>
							<Card.Body>
								<Card.Img variant="top" src={bun} />
							</Card.Body>
						</Card>
					</Col>
					<Col bsPrefix="gridCol">
						<Card style={{ width: "18em" }}>
							<Card.Body>
								<Card.Img variant="top" src={lal} />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Cards;
