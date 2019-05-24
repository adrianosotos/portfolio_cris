import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import Lightbox from 'react-image-lightbox';

import Image from './Image';

import '../Styles/Gallery.css';

const Gallery = () => {
	const data = useStaticQuery(graphql`
		query {
			allWordpressPost {
				edges {
					node {
						title
						featured_media {
							localFile {
								childImageSharp {
									resolutions {
										src
										width
										height
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	const imagesResolutions = data.allWordpressPost.edges.map(
		(edge) => edge.node.featured_media.localFile.childImageSharp.resolutions
	);
	const [ isOpen, setIsOpen ] = useState('');
	const [ photoIndex, setPhotoIndex ] = useState(0);
	const open = (index) => {
		setIsOpen(true);
		setPhotoIndex(index);
	};
	return (
		<div className="container">
			<h1 className="gallery__title">Portfolio</h1>
			<hr />
			<div className="gallery">
				{imagesResolutions.map((imageRes, index) => (
					<Image src={imageRes.src} index={index} openLightbox={open} />
				))}
			</div>
			{isOpen && (
				<Lightbox
					mainSrc={imagesResolutions[photoIndex].src}
					nextSrc={imagesResolutions[(photoIndex + 1) % imagesResolutions.length].src}
					prevSrc={
						imagesResolutions[(photoIndex + imagesResolutions.length - 1) % imagesResolutions.length].src
					}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + imagesResolutions.length - 1) % imagesResolutions.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagesResolutions.length)}
					discourageDownloads={false}
					clickOutsideToClose={true}
				/>
			)}
		</div>
	);
};

export default Gallery;
