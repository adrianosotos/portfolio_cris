import React from 'react';
import { Link } from 'gatsby';

import '../Styles/jumbotron.css';

const Jumbotron = () => {
	return (
		<div className="jumbotron paral parallax">
			<div className="container">
				<h1 className="jumbotron__title">CR Fotografia</h1>
				<p className="lead">
					<Link className="jumbotron__button" to="/contact" role="button">
						Entre em Contato
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
