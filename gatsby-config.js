const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const feeds = [
  {
    serialize: ({ query: { site, allMarkdownRemark } }) => {
      return allMarkdownRemark.edges.map(edge => {
        const postUrl = path.join(site.siteMetadata.siteUrl, edge.node.fields.slug)
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.frontmatter.description,
          date: edge.node.frontmatter.date,
          url: postUrl,
          guid: postUrl,
          custom_elements: [{ 'content:encoded': edge.node.excerpt }]
        })
      })
    },
    query: `
      {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                date
              }
              excerpt(truncate: true, pruneLength: 500, format: HTML)
            }
          }
        }
      }
    `,
    output: '/feed.xml',
    title: 'Anqi Li Feed'
  }
]

const plugins = [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/assets`,
      name: 'uploads'
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/posts`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/lab`,
      name: `lab`,
    },
  },
  `gatsby-transformer-json`,
  'gatsby-plugin-resolve-src',
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-svgr`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 650,
            linkImagesToOriginal: false
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static/assets/'
          }
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `@raae/gatsby-remark-oembed`,
          options: {
            usePrefix: false,
            providers: {
              include: [
                'Youtube',
                'Twitter',
                'Codepen',
              ],
              exclude: [
                'Reddit',
                'Flickr',
                'Instagram'
              ]
            },
          },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
        `gatsby-remark-external-links`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
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
      feeds
    }
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: 'en-us',
      useLangKeyLayout: false
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Anqi Li`,
      short_name: `anqi-uxr.github.io`,
      start_url: `/`,
      background_color: `#fcfcfc`,
      theme_color: `#111111`,
      display: `minimal-ui`,
      icon: `content/assets/icon.png`,
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Anqi Li - UX Researcher`,
    author: `Anqi Li`,
    position: 'UX Researcher',
    description: `Anqi's portfolio.`,
    siteUrl: `https://anqi-uxr.github.io/`,
    social: {
      linkedinLink: `https://www.linkedin.com/in/anqiliuxr/`,
    },
  },
  plugins
}
