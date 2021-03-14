import React from "react"
import "../../styles/project-header.scss"

const ProjectHeader = ({ title, subtitle, background }) => {
  return (
    <div className="project-header">
      <img src={background}></img>
      <div className="title-section">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  )
}

export default ProjectHeader
