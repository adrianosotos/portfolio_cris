import React, { useEffect, useState } from 'react';

import Layout from '../Components/Layout';
import Jumbotron from '../Components/Jumbotron';
import Contact from '../Components/Contact';
import About from '../Components/About';

const IndexPage = () => {
	const [ className, setClassName ] = useState('hidden');
	const scroll = () => {
		if (
			(window.scrollY ||
				window.pageYOffset ||
				document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0)) > 430
		) {
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
