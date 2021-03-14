import React from "react"

import SEO from "../components/main/seo"
import ProjectHeader from "../components/project/ProjectHeader"
import hivetec from "../images/hivetec.jpg"
import TwoColumn from "../components/main/atoms/TwoColumn"

import "../styles/project.scss"

const HiveTec = () => (
  <>
    <SEO title={"IoT for Agriculture"} />

    <ProjectHeader
      title={"Remote Beehive Monitoring Technology"}
      subtitle={"Care for the BEEs & promote species diversity"}
      background={hivetec}>
    </ProjectHeader>

    <TwoColumn>
      <div>
        <h1>Project Summary</h1>
        <p>
          HiveTec is an early-stage start-up focusing on using technology as a solution to agricultural problems. HiveTec is developing an IoT-based remote monitoring tool for beehives to combat high honeybee colony loss.
        </p>
        <p>
          "As the primary UX researcher, I conducted a two-month foundational research project to understand U.S. beekeepers’ working processes, challenges, and needs with regards to monitoring beehives and keep bees healthy. As a result, I defined product features for the first-generation MVP by leveraging insights from in-depth interviews and an online survey with hobbyist beekeepers across the U.S.",
        </p>
      </div>
      <div>
        <h2>Methods</h2>
        <p>
          Foundational Research / Semi-structured Interviews / Survey
        </p>
        <h2>My Role</h2>
        <p>
          Primary UX Researcher: research planning, execution, and guiding the definition of the first-generation MVP
        </p>
        <h2>TimeFrame</h2>
        <p>
          Dec 2020 - Jan 2021 (Two Months)
        </p>
        <h2>Stakeholders</h2>
        <p>
          CEO, UX team
        </p>
      </div>
    </TwoColumn>
  </>
)

export default HiveTec
