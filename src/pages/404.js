import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from 'components/Layout'
import Content from 'components/Content'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'

import * as V from 'styles/variables'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title='Page not found' />
      <GridTemplate>
        <Content>
          <h1>There's nothing here... 😱</h1>
          <p className='support-title'>But don't worry! 😄</p>
          <p>
            In the meantime you can take a look at my{' '}
            <AniLink
              cover
              bg={V.Color.whiteSolid}
              direction='down'
              duration={1}
              to='/experience/'
            >
              personal projects
            </AniLink>
            !{' '} 😍
          </p>
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export default NotFoundPage
