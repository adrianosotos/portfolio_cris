import React from 'react';

import '../Styles/Gallery.css';
import 'react-image-lightbox/style.css';

const Image = ({ src, openLightbox, index }) => {
	return (
		<div>
			<img className="item" src={src} onClick={() => openLightbox(index)} alt="portfolio_photo" />
		</div>
	);
};

export default Image;
