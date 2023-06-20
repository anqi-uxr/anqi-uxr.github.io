import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'
import Content from 'components/Content'

import * as V from 'styles/variables'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <GridTemplate>
        <Content>
          <h1>Hello 👋</h1>
          <p>I'm a UX researcher and product strategist with a background in psychology and human factors. I distinguish myself through diligent research, strategic thinking, entrepreneurial mindset.</p>
          <p>I enjoy navigating ambiguous problem spaces, solving complex problems with simple solutions, and drive innovation through actionable insights.</p>
          <p>My personal philosophy in UXR:</p>
          <ul>
            <li>Research should be rigorous but also bold: years of experience being in startups and answering ambiguous questions have taught me to be resourceful, innovative, and goal-driven</li>
            <li>Research goes further with great collaboration: always be empathic, insightful, and action-driven with not just users but also partners. Problem gets solved by a team.</li>
            <li>Never be afraid to share, lead, and innovate: UXR has the best understanding of users and often great intuitions. Research enables me to be proactive in driving product innovation and taking strategic lead</li>
          </ul>
          <p>
            Check out my{' '}
            <AniLink
              cover
              bg={V.Color.whiteSolid}
              direction='down'
              duration={1}
              to='/work/'
            >
              previous work
            </AniLink>
            . Please reach out directly to discuss more of my recent work.
          </p>
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
