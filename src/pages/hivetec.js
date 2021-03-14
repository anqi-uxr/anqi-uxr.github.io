import React from "react"

import SEO from "../components/main/seo"
import ProjectHeader from "../components/project/ProjectHeader"
import ProjectSummary from "../components/project/ProjectSummary"

import hivetec_data from "../data/hivetec-data"

const HiveTec = () => (
  <>
    <SEO title={hivetec_data.siteTitle} />
    <ProjectHeader
      title={hivetec_data.header.title}
      subtitle={hivetec_data.header.subtitle}
      background={hivetec_data.header.background}>
    </ProjectHeader>
    <ProjectSummary
      summary={hivetec_data.summary.summary}
      methods={hivetec_data.summary.methods}
      role={hivetec_data.summary.role}
      timeframe={hivetec_data.summary.timeframe}
      stakeholders={hivetec_data.summary.stakeholders}>
    </ProjectSummary>
  </>
)

export default HiveTec
