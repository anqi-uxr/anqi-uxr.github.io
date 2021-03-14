import React from "react"

const ProjectHeader = ({ title, subtitle, background }) => {
  return (
    <div className="project-header">
      <img src={background}></img>
      <div class="title-section">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  )
}

export default ProjectHeader
