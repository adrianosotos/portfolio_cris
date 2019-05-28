const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const galleryTemplate = path.resolve('./src/templates/gallery.js');
	const res = await graphql(`
        query {
        allContentfulGallery {
			edges {
				node {
					slug
				}
			}
		}
    }
    `);

	res.data.allContentfulGallery.edges.forEach((edge) => {
		createPage({
			component: galleryTemplate,
			path: `/gallery/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		});
	});
};
