import React from 'react';
import Header from './Header';
import TopDrawer from './Topdrawer/TopDrawer';
import Footer from './Footer';

import '../Styles/base.css';

class Layout extends React.Component {
	state = {
		topDrawerOpen: false
	};
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { topDrawerOpen: !prevState.topDrawerOpen };
		});
	};
	render() {
		return (
			<div className="height">
				<TopDrawer show={this.state.topDrawerOpen} />
				<Header drawClickHandler={this.drawerToggleClickHandler} />
				<div>{this.props.children}</div>
				<div className="space" />
				<Footer />
			</div>
		);
	}
}

export default Layout;
