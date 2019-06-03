import React from 'react';
import logo from './imgs/Logo.png';

const Jumbotron = () => {
	return (
		<section className="jumbotron">
			<div className="container">
				<img className="jumbotron__logo  animated rotateIn" src={logo} alt="logo" />
				<p className="jumbotron__title animated pulse">Cris Lima Fotografia</p>
			</div>
		</section>
	);
};

export default Jumbotron;
