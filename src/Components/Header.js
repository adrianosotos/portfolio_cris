import React from 'react';
import { Link } from 'gatsby';

import DrawerToggleButton from './Topdrawer/DrawerToggleButton';
import { faFacebookSquare, faTwitterSquare, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ scroll, aboutRef, contactRef, drawClickHandler }) => {
	return (
		<header className="header">
			<ul>
				<li>
					<Link to="">Home</Link>
				</li>
				<li>
					<Link to="/#about">Sobre</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/#contact">Contato</Link>
				</li>
				<li className="header__toggle-button">
					<DrawerToggleButton click={drawClickHandler} />
				</li>
			</ul>
		</header>
	);
};

export default Header;
