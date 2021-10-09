module.exports = {
  pathPrefix: "/huy_landing_page_hanh_kho",
  siteMetadata: {
    title: `Crafty Co | Web Development`,
    titleTemplate: "%s",
    description: `We're on a mission to make the web beautiful.`,
    image: "/logo.png",
    twitterUsername: "@Simplecodehq",
    siteUrl: "https://kingend00.github.io/huy_landing_page_hanh_kho",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
