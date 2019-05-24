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
					wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
					wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
					wpcom_user: process.env.WORDPRESS_USER,
					wpcom_pass: process.env.WORDPRESS_PASSWORD
				},
				verboseOutput: false
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp'
	]
};
