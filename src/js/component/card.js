import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const Cardcenter = () => (
	<Card className="cardbody">
		<Card.Img
			className="image"
			variant="top"
			src="https://i.pinimg.com/originals/2c/81/b4/2c81b44e3c4ca8d04da745a5c0530eef.jpg"
		/>
		<Card.Body>
			<Card.Title className="text-warning mt-2">Halloween</Card.Title>
			<Card.Text>
				Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she
				narrowly escaped his killing spree on Halloween night four decades ago.
			</Card.Text>
			<Button variant="danger mt-2">Watch it</Button>
		</Card.Body>
	</Card>

	// <Card className="cardbody">
	// 	<Card.Img
	// 		className="image"
	// 		variant="top"
	// 		src="https://i.pinimg.com/originals/2c/81/b4/2c81b44e3c4ca8d04da745a5c0530eef.jpg"
	// 	/>
	// 	<Card.Body>
	// 		<Card.Title className="text-warning mt-2">Halloween</Card.Title>
	// 		<Card.Text>
	// 			Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she
	// 			narrowly escaped his killing spree on Halloween night four decades ago.
	// 		</Card.Text>
	// 		<Button variant="danger mt-2">Watch it</Button>
	// 	</Card.Body>
	// </Card>
);

Cardcenter.propTypes =
