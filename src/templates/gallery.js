import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import Image from '../Components/Image';

import 'react-image-lightbox/style.css';
import '../Styles/gallery.css';
import Layout from '../Components/Layout';

export const query = graphql`
	query($slug: String!) {
		contentfulGallery(slug: { eq: $slug }) {
			title
			media {
				fixed {
					src
				}
			}
		}
	}
`;

const Gallery = (props) => {
	const [ isOpen, setIsOpen ] = useState('');
	const [ photoIndex, setPhotoIndex ] = useState(0);
	const open = (index) => {
		setIsOpen(true);
		setPhotoIndex(index);
	};
	const mediaArray = props.data.contentfulGallery.media;
	{
		console.log(mediaArray);
	}
	return (
		<Layout>
			<div className="container height gal">
				<h1 className="gallery__title">{props.data.contentfulGallery.title}</h1>
				<div className="gallery">
					{mediaArray.map((media, index) => (
						<Image src={media.fixed.src} index={index} openLightbox={open} />
					))}
				</div>
				{isOpen && (
					<Lightbox
						mainSrc={mediaArray[photoIndex].fixed.src}
						nextSrc={mediaArray[(photoIndex + 1) % mediaArray.length].fixed.src}
						prevSrc={mediaArray[(photoIndex + mediaArray.length - 1) % mediaArray.length].fixed.src}
						onCloseRequest={() => setIsOpen(false)}
						onMovePrevRequest={() =>
							setPhotoIndex((photoIndex + mediaArray.length - 1) % mediaArray.length)}
						onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % mediaArray.length)}
						discourageDownloads={false}
						clickOutsideToClose={true}
					/>
				)}
			</div>
		</Layout>
	);
};

export default Gallery;
