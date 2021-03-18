import React from "react"
import "../../styles/project-header.scss"

const ProjectHeader = ({ header }) => {
  return (
    <div className="project-header">
      <img src={header.background}></img>
      <div className="title-section">
        <h1>{header.title}</h1>
        <h2>{header.subtitle}</h2>
      </div>
      <a href="/">Home</a>
    </div>
  )
}

export default ProjectHeader
