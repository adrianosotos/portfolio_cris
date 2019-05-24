import React from 'react';
import { Link } from 'gatsby';

import '../../Styles/TopDrawer.css';

const TopDrawer = (props) => {
	let drawerClasses = 'top-drawer';
	if (props.show) {
		drawerClasses = 'top-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="contact">Contato</Link>
				</li>
			</ul>
		</nav>
	);
};

export default TopDrawer;
