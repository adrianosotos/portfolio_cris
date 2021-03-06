require('dotenv').config({
	path: '.env'
});

module.exports = {
	siteMetadata: {
		title: 'Full-Stack Bootcamp',
		author: 'Adriano M. Sotos'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		'gatsby-plugin-sharp'
	]
};
