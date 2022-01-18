import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'
import Content from 'components/Content'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='About Me' />
      <GridTemplate>
        <Content>
          <h1>More about me</h1>
          <p>I'm a UX researcher with a background in psychology and behavior research. I am a human-enthusiastic. I enjoy studying people, diving into people's lives and minds, understanding their lifestyles, experiences, and motivations.</p>
          <p>I care deeply about making meaningful social impacts through my research. You can read more in detail in my case studies how my research benefits beyond the scope of a product and reach into promoting species diversity through caring about honeybees, raising open science awareness, and equalizing student access to educational resources.</p>
          <p>Outside of work, I enjoy spending time with my kitties😼, developing recipes in my kitchen👨‍🍳‍, and cycling 🚴‍♀️.</p>
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
