require('dotenv').config({
	path: '.env'
});
const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'CLR Fotos'
	},
	plugins: [
		// https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
		/*
       * Gatsby's data processing layer begins with “source”
       * plugins. Here the site sources its data from WordPress.
       */
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: 'adrianosotos.home.blog',
				protocol: 'https',
				hostingWPCOM: true,
				useACF: false,
				auth: {
					wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
					wpcom_app_clientId: process.env.WORDPRESS_CLIENTID,
					wpcom_user: process.env.WORDPRESS_U,
					wpcom_pass: process.env.WORDPRESS_P
				},
				verboseOutput: true
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp'
	]
};
