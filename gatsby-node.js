const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(
    `{
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "en-us", formatString: "DD MMM[,] YYYY")
              description
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "en-us", formatString: "DD MMM[,] YYYY")
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "en-us", formatString: "DD MMM[,] YYYY")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          slug: node.fields.slug,
          // the order is different here because of the DESC order
          previous: next,
          next: previous
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      node,
      name: `slug`,
      value: `blog/${slug.slice(12)}`
    })
  }
}