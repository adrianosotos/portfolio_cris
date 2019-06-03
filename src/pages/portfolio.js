import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Layout from '../Components/Layout';

const Portfolio = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulGallery {
				edges {
					node {
						title
						slug
						media {
							description
							fixed {
								src
							}
						}
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<div className="container portfolio">
				<h1 className="portfolio__title">Portfolio</h1>
				<hr />
				<div className="portfolio__gallery">
					{data.allContentfulGallery.edges.map((edge) => (
						<div className="thumbex">
							<div className="thumbnail">
								<Link to={`/gallery/${edge.node.slug}`}>
									<img src={edge.node.media.find((o) => o.description === 'capa').fixed.src} />
									<span>{edge.node.title}</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Portfolio;
