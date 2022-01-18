import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'
import Content from 'components/Content'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <GridTemplate>
        <Content>
          <h1>Hello 👋</h1>
          <p>I'm a UX researcher with 2+ years of experience in UX research with a background training in psychology and human factors.</p>
          <p>I'm passionate about understanding people (not just users), building trust between people and technology, and most importantly make people's lives better through my research.</p>
          <p>I am also a fast learner who is always looking for opportunities to grow as a researcher, a team player, and someone who makes people's lives better through UX research.</p>
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
