import React from 'react';
import { Link } from 'gatsby';

import img from '../Styles/img/logo.png';
import '../Styles/header.css';
import DrawerToggleButton from './topdrawer/DrawerToggleButton';

const Header = (props) => {
	return (
		<header className="header">
			<nav className="container header__navigation">
				<div>
					<Link to="/">
						<img className="header__logo" src={img} alt="logo" />
					</Link>
				</div>
				<div className="spacer" />
				<div className="header__navigation-itens">
					<ul>
						<li>
							<Link to="">Home</Link>
						</li>
						<li>
							<Link to="contact">Contato</Link>
						</li>
					</ul>

					<div />
				</div>
				<div className="header__toggle-button">
					<DrawerToggleButton click={props.drawClickHandler} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
