import React, { cloneElement } from 'react';

import '../Styles/base.css';

import Layout from '../Components/Layout';
import Jumbotron from '../Components/Jumbotron';
import Portfolio from '../Components/Portfolio';

const IndexPage = () => {
	return (
		<Layout>
			<Jumbotron />
			<Portfolio />
		</Layout>
	);
};

export default IndexPage;
