import React from "react"

import SEO from "../components/main/seo"
import ProjectHeader from "../components/project/ProjectHeader"

import hivetec from "../images/hivetec.jpg"

const IndexPage = () => (
  <>
    <SEO title="IoT for Agriculture" />
    <ProjectHeader
      title="Remote Beehive Monitoring Technology"
      subtitle="Care for the BEEs & promote species diversity"
      background={hivetec}>
    </ProjectHeader>
  </>
)

export default IndexPage
