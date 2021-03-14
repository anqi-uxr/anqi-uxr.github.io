import React from "react"
import "../../styles/project-summary.scss"
import TwoColumn from "../common/TwoColumn"

const ProjectSummary = ({ summary }) => {
  return (
    <div className="summary-container">

      <TwoColumn>

        <div>
          <h1>Project Summary</h1>
          <div className="summary-pragraphs">
            {summary.summary.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <h2>Methods</h2>
          <p>{summary.methods}</p>

          <h2>My Role</h2>
          <p>{summary.role}</p>

          <h2>TimeFrame</h2>
          <p>{summary.timeframe}</p>

          <h2>Stakeholders</h2>
          <p>{summary.stakeholders}</p>
        </div>

      </TwoColumn>
    </div>
  )
}

export default ProjectSummary
