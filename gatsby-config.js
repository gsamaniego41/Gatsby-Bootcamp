/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gabriel Samaniego",
    author: "Gabriel Samaniego",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins:700,800", "Raleway:300,400,500"],
        },
      },
    },
  ],
}
