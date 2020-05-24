module.exports = {
  siteMetadata: {
    title: `Southern Partners`,
    description: `Southern Partners is a marketer of power, crude oil, and natural gas, as well as other petroleum products and renewables.`,
    author: `@ayoola`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `css`,
        path: `${__dirname}/src/scss-css`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    // Add these after css plugins
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        output: "processed",
        ignore: ["/css-resest.scss", "prismjs/", "docsearch.js/"], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
