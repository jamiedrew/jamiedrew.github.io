//See: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `games`,
        path: `${__dirname}/src/pages/games/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectImages`,
        path: `${__dirname}/src/images/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Jamie Drew",
    description: "Developer portfolio",
    copyright: "© James Drew 2021"
  }
}