/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const isProd = process.env.NODE_ENV !== 'production';
console.log('isProd process.env.NODE_ENV', isProd);
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `FrontendLabs`,
    author: 'root'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-plugin-draft',
      options: {
        publishDraft: isProd
      }
    },
  ]
}
