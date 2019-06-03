import React, { useState, useRef } from 'react';
import Header from './Header';
import TopDrawer from './Topdrawer/TopDrawer';
import Footer from './Footer';
import Backdrop from './Backdrop';

import '../Styles/_styles.scss';

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
	const [ topDrawerOpen, setTopDrawerOpen ] = useState(false);

	const drawerToggleClickHandler = () => {
		setTopDrawerOpen(!topDrawerOpen);
	};
	const backdropClickHandler = () => {
		setTopDrawerOpen(false);
	};
	let backDrop;
	if (topDrawerOpen) {
		backDrop = <Backdrop click={backdropClickHandler} />;
	}
	return (
		<div>
			<TopDrawer show={topDrawerOpen} />
			{backDrop}
			<Header drawClickHandler={drawerToggleClickHandler} />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
