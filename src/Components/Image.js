import React from 'react';

import '../Styles/Image.css';
import 'react-image-lightbox/style.css';

const Image = ({ src, openLightbox, index }) => {
	return (
		<div className="image">
			<img src={src} onClick={() => openLightbox(index)} alt="portfolio_photo" />
		</div>
	);
};

export default Image;
