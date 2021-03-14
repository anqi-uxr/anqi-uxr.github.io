import React from "react"

import SEO from "../components/main/seo"
import ProjectHeader from "../components/project/ProjectHeader"

import data from "../data/hivetec-data"

const HiveTec = () => (
  <>
    <SEO title={data.siteTitle} />
    <ProjectHeader
      title={data.header.title}
      subtitle={data.header.subtitle}
      background={data.header.background}>
    </ProjectHeader>
  </>
)

export default HiveTec
