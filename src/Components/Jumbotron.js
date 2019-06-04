import React from 'react';
import logo from './imgs/Logo.png';

const Jumbotron = () => {
	return (
		<section className="jumbotron">
			<img className="jumbotron__logo  animated rotateIn" src={logo} alt="logo" />
			<h1 className="jumbotron__title animated pulse">Cris Lima Fotografia</h1>
		</section>
	);
};

export default Jumbotron;
