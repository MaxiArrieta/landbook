module.exports = {
  siteMetadata: {
    title: `Landbook`,
    description: `Landboox diseño de paginas web a medida`,
    author: `Maximiliano Arrieta <arrieta.maxi18@gmail.com>`,
    siteUrl: `https://landbook.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
  ],
}
