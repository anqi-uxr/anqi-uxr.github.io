import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Lab from 'components/Lab'

const labJsonQuery = graphql`
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

const LabPage = () => {
  const data = useStaticQuery(labJsonQuery)

  return (
    <Layout>
      <SEO title="Experience" />
      <Lab content={data.allLabJson.edges} />
    </Layout>
  )
}

export default LabPage
