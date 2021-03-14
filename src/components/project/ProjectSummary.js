import React from "react"
import "../../styles/project-summary.scss"

const ProjectHeader = ({ summary, methods, role, timeframe, stakeholders }) => {
  return (
    <div className="summary-container">
      <div class="row">
        <div class="column">
          <h1>Project Summary</h1>
          <div className="summary-pragraphs">
            {summary.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
        <div class="column">
          <h2>Methods</h2>
          <p>{methods}</p>
          <h2>My Role</h2>
          <p>{role}</p>
          <h2>TimeFrame</h2>
          <p>{timeframe}</p>
          <h2>Stakeholders</h2>
          <p>{stakeholders}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectHeader
