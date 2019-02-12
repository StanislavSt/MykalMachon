module.exports = {
  siteMetadata: {
    title: `Mykal Machon`,
    description: `I am a full time CIS Student at UFV who develops webapps in his spare time.`,
    author: `@mykalmachon`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mykal Machon`,
        short_name: `Mykal's Blog`,
        start_url: `/`,
        background_color: `#9D46F4`,
        theme_color: `#9D46F4`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
