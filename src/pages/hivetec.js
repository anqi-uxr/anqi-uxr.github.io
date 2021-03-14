import React from "react"

import SEO from "../components/main/seo"
import ProjectHeader from "../components/project/ProjectHeader"

import hivetec_data from "../data/hivetec-data"

const HiveTec = () => (
  <>
    <SEO title={hivetec_data.siteTitle} />
    <ProjectHeader
      title={hivetec_data.header.title}
      subtitle={hivetec_data.header.subtitle}
      background={hivetec_data.header.background}>
    </ProjectHeader>
  </>
)

export default HiveTec
