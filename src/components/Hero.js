import React from "react";
import photoGrid from "../images/airbnb-collage.png";

export default function Hero() {
	return (
		<section>
			<img
				src={photoGrid}
				alt="group of pictures"
				className="photo-grid"
			/>
			<h1 className="title">Online Experiences</h1>
			<p className="info">
				Join unique interactive activities led by one-of-a-kind
				hosts—all without leaving home.
			</p>
		</section>
	);
}
