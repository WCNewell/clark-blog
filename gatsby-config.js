require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Clark Newell`,
        description: `Clark Newell Blog Site`,
        keywords: `Web Development Gatsby React Blog Headless WordPress`,
        author: `@gatsbyjs and @WCNewell`,
        siteUrl: 'https://clarknewell.netlify.com'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `clarknewell.tech`,
                protocol: `https`,
                hostingWPCOM: true,
                useACF: true,
                    auth: {
                    wpcom_app_clientSecret: process.env.WP_SECRET,
                    wpcom_app_clientId: process.env.WP_CLIENTID,
                    wpcom_user: process.env.WP_USERNAME,
                    wpcom_pass: process.env.WP_PASSWORD,
                    },
                verboseOutput: false,
            },
        },
        {
        resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
        resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,   
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-use-dark-mode`,
        {
          resolve: `gatsby-plugin-react-svg`,
          options: {
            rule: {
              include: /assets/
            }
          }
        },
        {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `clark-newell-blog`,
            short_name: `blog`,
            start_url: `/`,
            background_color: `#FFFFFF`,
            theme_color: `#FFFFFF`,
            display: `minimal-ui`,
            icon: `src/images/clark-logo-white.png`, // This path is relative to the root of the site.
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality with a ServiceWorker
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    ],
}
