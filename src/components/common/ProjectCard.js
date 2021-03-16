import React from "react"
import "../../styles/project-card.scss"

const ProjectCard = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div className="project-card-container">
      <a
        href={projectLink ? projectLink : "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <div className="project-card">
          <img src={imgUrl} />
          <div className="project-content">
            <h1>{heading}</h1>
            <h2>{paragraph}</h2>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
