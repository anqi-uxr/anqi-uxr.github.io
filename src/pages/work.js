import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Lab from 'components/Lab'

const workJsonQuery = graphql`
  query {
    allLabJson {
      edges {
        node {
          id,
          path
          title
          date
          description
          imageSrc {
            relativePath
          }
        }
      }
    }
  }
`

const WorkPage = () => {
  const data = useStaticQuery(workJsonQuery)

  return (
    <Layout>
      <SEO title="Work" />
      <Lab content={data.allLabJson.edges} />
    </Layout>
  )
}

export default WorkPage
