import React, { useEffect, useState } from 'react';

import Layout from '../Components/Layout';
import Jumbotron from '../Components/Jumbotron';
import Contact from '../Components/Contact';
import About from '../Components/About';

const IndexPage = () => {
	const [ className, setClassName ] = useState('hidden');
	const handleScroll = () => {
		// console.log(document.documentElement.scrollTop);
		if (document.documentElement.scrollTop > 150) {
			setClassName('fade-in');
		}
	};
	useEffect(() => (window.onscroll = () => handleScroll()), []);
	return (
		<Layout>
			<Jumbotron />
			<About className={className} />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
