import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { getActiveTheme } from 'utils/themes'

import Layout from 'components/Layout'
import Content from 'components/Content'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title='Skills' />
      <GridTemplate>
        <Content>
          <h1>Under development ...</h1>
          <p>Coming soon... 😄</p>
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export default NotFoundPage
