import React from 'react';
import Header from './Header';
import TopDrawer from './topdrawer/TopDrawer';
import Footer from './Footer';

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
			<div>
				<TopDrawer show={this.state.topDrawerOpen} />
				<Header drawClickHandler={this.drawerToggleClickHandler} />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Layout;
