import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cardcenter } from "../component/card";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="container">
			<Cardcenter className="cardbody" />
		</div>
	</div>
);
