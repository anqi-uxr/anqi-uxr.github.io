import React from "react"

import SEO from "../components/common/seo"
import ProjectHeader from "../components/project/ProjectHeader"
import ProjectSummary from "../components/project/ProjectSummary"

import data from "../data/chaione-data"

import "../styles/project.scss"


const ChaiOne = () => (
  <div className="project">
    <SEO title={data.siteTitle} />
    <ProjectHeader header={data.header} />

    <div className="project-content">
      <ProjectSummary summary={data.summary} />
    </div>
  </div>
)

export default ChaiOne
