import React, { useEffect, useState } from 'react';

import Layout from '../Components/Layout';
import Jumbotron from '../Components/Jumbotron';
import Contact from '../Components/Contact';
import About from '../Components/About';

const IndexPage = () => {
	const [ className, setClassName ] = useState('hidden');
	const scroll = () => {
		if (document.documentElement.scrollTop > 430) {
			setClassName('fade-in');
		}
	};
	useEffect(() => {
		window.onscroll = () => scroll();
	}, []);
	return (
		<Layout>
			<Jumbotron />
			<About className={className} />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
