import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="p-0 m-0">
			<Navbar />

			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<div className="bg-secondary">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
