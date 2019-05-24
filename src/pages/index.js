import React from 'react';

import '../Styles/base.css';

import Layout from '../Components/Layout';
import Jumbotron from '../Components/Jumbotron';
import Gallery from '../Components/Gallery';

const IndexPage = () => {
	return (
		<Layout>
			<Jumbotron />
			<Gallery />
		</Layout>
	);
};

export default IndexPage;
