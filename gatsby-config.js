module.exports = {
  siteMetadata: {
    title: `Andrey Serebryakov`,
    author: {
      name: `Andrey Serebryakov`,
      summary: `who is fighting procrastination and laziness to write these posts! `,
    },
    description: `I am Andrey Serebryakov and I'm a software developer. Trying to fight procrastination and laziness to fulfill dreams and develop awesome apps!`,
    social:  {
      github: `https://github.com/Serebryakov-A`,
      linkedIn: `https://linkedin.com/in/serebrjakovs-andrejs-850617134`
    },
    navigation: [
      {
        title: "About",
        slug: "/about",
      },
      {
        title: "Projects",
        slug: "/projects",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import"),
          require(`postcss-preset-env`)({ stage: 0 }),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: true,
              ordered: true,
              fromHeading: 1,
              toHeading: 2,
              className: "table-of-contents"
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Dark+ (default dark)",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-autolink-headers`
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrey Serebryakov Blog`,
        short_name: `Andrey Serebryakov`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bio.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
