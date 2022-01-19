import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'
import PostContent from 'components/PostContent'

import PostHeader from 'components/PostHeader'

const BlogPost = (props) => {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <GridTemplate>
        <div itemScope itemType="http://schema.org/Article">
          <PostHeader
            image={post.frontmatter.image}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            timeToRead={post.timeToRead}
          />
          <PostContent>
            <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
          </PostContent>
        </div>
      </GridTemplate>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "en-us", formatString: "MMMM YYYY")
        description
        title
        image {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 1280, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
